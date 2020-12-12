import { Router } from 'express';

import ExchangeController from '@modules/exchange/infra/http/controllers/ExchangeController';
import CurrenciesController from '@modules/exchange/infra/http/controllers/CurrenciesController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const exchangeRateRouter = Router();
const exchangeController = new ExchangeController();
const currenciesController = new CurrenciesController();

exchangeRateRouter.use(ensureAuthenticated);

exchangeRateRouter.get('/', exchangeController.create);

exchangeRateRouter.get('/currencies', currenciesController.show);

exchangeRateRouter.put('/', currenciesController.update);

export default exchangeRateRouter;
