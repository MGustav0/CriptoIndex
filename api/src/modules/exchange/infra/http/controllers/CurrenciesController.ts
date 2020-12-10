import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCurrencyRateService from '@modules/exchange/service/UpdateCurrencyRateService';

class CurrenciesController {
  public async create(request: Request, response: Response): Promise<Response> {
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
