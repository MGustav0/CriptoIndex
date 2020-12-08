import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

import exchangeRateRouter from '@modules/exchange/infra/http/routes/exchangeRate.routes';

const routes = Router();

routes.use('/api/users', usersRouter);
routes.use('/api/sessions', sessionsRouter);
routes.use('/api/password', passwordRouter);

routes.use('/api/crypto/btc', exchangeRateRouter);

export default routes;
