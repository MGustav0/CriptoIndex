import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import CurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

import IRequestDTO from '@modules/exchange/dtos/IRequestDTO';

import AppError from '@shared/errors/AppError';

class UpdateCurrencyRateService {
  private currenciesRepository: CurrenciesRepository;

  constructor(currenciesRepository: CurrenciesRepository) {
    this.currenciesRepository = currenciesRepository;
  }

  public execute({ currency, value }: IRequestDTO): Currencies {
    if (!(currency === 'BRL' || currency === 'EUR' || currency === 'CAD')) {
      throw new AppError('Moeda inválida', 400);
    }

    if (typeof value !== 'number' || value <= 0) {
      throw new AppError('Valor inválido', 400);
    }

    const currencies = this.currenciesRepository.findCurrencies();

    // eslint-disable-next-line no-restricted-syntax
    for (const index in currencies) {
      if (index === currency) {
        currencies[index] = JSON.stringify(value);
      }
    }

    const currenciesJSON = this.currenciesRepository.create(currencies);

    return currenciesJSON;
  }
}

export default UpdateCurrencyRateService;
