import { Router } from 'express';
import { container } from 'tsyringe';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CreateCurrencyRateService from '@modules/exchange/service/CreateCurrencyRateService';
import UpdateCurrencyRateService from '@modules/exchange/service/UpdateCurrencyRateService';

import CreateEndpointReturnService from '@modules/exchange/service/CreateEndpointReturnService';

import apiCoinDesk from '@shared/infra/http/services/apiCoinDesk';

const exchangeRateRouter = Router();

exchangeRateRouter.use(ensureAuthenticated);

exchangeRateRouter.get('/', (_, response) => {
  async function loadCurrencies() {
    const [usd, brl, eur, cad, btc] = await Promise.all([
      apiCoinDesk.get(`/currentprice/usd.json`),
      apiCoinDesk.get(`/currentprice/brl.json`),
      apiCoinDesk.get(`/currentprice/eur.json`),
      apiCoinDesk.get(`/currentprice/cad.json`),
      apiCoinDesk.get(`/currentprice/btc.json`),
    ]);

    const usdPrice = usd.data.bpi.USD.rate;
    const brlPrice = brl.data.bpi.BRL.rate;
    const eurPrice = eur.data.bpi.EUR.rate;
    const cadPrice = cad.data.bpi.CAD.rate;

    const createCurrency = container.resolve(CreateCurrencyRateService);

    createCurrency.execute({ usdPrice, brlPrice, eurPrice, cadPrice });

    const usdTime = usd.data.time;
    const usdDisclaimer = usd.data.disclaimer;
    const usdBpi = usd.data.bpi.USD;

    const brlCode = brl.data.bpi.BRL.code;
    const brlDescription = brl.data.bpi.BRL.description;

    const eurCode = eur.data.bpi.EUR.code;
    const eurDescription = eur.data.bpi.EUR.description;

    const cadCode = cad.data.bpi.CAD.code;
    const cadDescription = cad.data.bpi.CAD.description;

    const btcBpi = btc.data.bpi.BTC;

    const createEndpointReturn = container.resolve(CreateEndpointReturnService);

    const endpointReturn = createEndpointReturn.execute({
      usdTime,
      usdDisclaimer,
      usdBpi,
      brlCode,
      brlDescription,
      eurCode,
      eurDescription,
      cadCode,
      cadDescription,
      btcBpi,
      usdPrice,
    });

    response.status(200).json(endpointReturn);
  }

  loadCurrencies();
});

exchangeRateRouter.put('/', async (require, response) => {
  const { currency, value } = require.body;

  const updateCurrencyReturn = container.resolve(UpdateCurrencyRateService);

  await updateCurrencyReturn.execute({
    currency,
    value,
  });

  return response.status(200).json({ message: 'Valor alterado com sucesso!' });
});

export default exchangeRateRouter;
