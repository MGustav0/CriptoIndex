import { Router } from 'express';
// import fs from 'fs';
// import path from 'path';

// import Currencies from '@modules/exchange/infra/data/models/Currencies';
import CurrenciesRepository from '@modules/exchange/repositories/CurrenciesRepository';

import apiCoinDesk from '@shared/infra/http/services/apiCoinDesk';

const exchangeRateRouter = Router();
const currenciesRepository = new CurrenciesRepository();

exchangeRateRouter.get('/', (request, response) => {
  async function loadCurrencies() {
    const [usd, brl, eur, cad] = await Promise.all([
      apiCoinDesk.get(`/currentprice/usd.json`),
      apiCoinDesk.get(`/currentprice/brl.json`),
      apiCoinDesk.get(`/currentprice/eur.json`),
      apiCoinDesk.get(`/currentprice/cad.json`),
    ]);

    const usdPrice = usd.data.bpi.USD.rate;
    const brlPrice = brl.data.bpi.BRL.rate;
    const eurPrice = eur.data.bpi.EUR.rate;
    const cadPrice = cad.data.bpi.CAD.rate;

    const brlExchangeRate = parseFloat(brlPrice) / parseFloat(usdPrice);
    const eurExchangeRate = parseFloat(eurPrice) / parseFloat(usdPrice);
    const cadExchangeRate = parseFloat(cadPrice) / parseFloat(usdPrice);

    const BRL = brlExchangeRate.toFixed(3);
    const EUR = eurExchangeRate.toFixed(3);
    const CAD = cadExchangeRate.toFixed(3);

    const currencies = currenciesRepository.create(BRL, EUR, CAD);

    response.status(200).json(currencies);
  }

  loadCurrencies();
});

export default exchangeRateRouter;
