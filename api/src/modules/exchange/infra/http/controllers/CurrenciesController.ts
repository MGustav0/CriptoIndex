import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowCurrenciesRateServer from '@modules/exchange/service/ShowCurrenciesRateServer';
import UpdateCurrencyRateService from '@modules/exchange/service/UpdateCurrencyRateService';

class CurrenciesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const currencies = container.resolve(ShowCurrenciesRateServer);

    return response.status(200).json(currencies);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { currency, value } = request.body;

    const updateCurrencyReturn = container.resolve(UpdateCurrencyRateService);

    await updateCurrencyReturn.execute({
      currency,
      value,
    });

    return response
      .status(200)
      .json({ message: 'Valor alterado com sucesso!' });
  }
}

export default CurrenciesController;
