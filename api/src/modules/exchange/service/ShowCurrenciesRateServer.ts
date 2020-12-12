import { injectable, inject } from 'tsyringe';

import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import CurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

@injectable()
class ShowCurrencyRateService {
  constructor(
    @inject('CurrenciesRepository')
    private currenciesRepository: CurrenciesRepository,
  ) {}

  public execute(): Currencies {
    return this.currenciesRepository.findCurrencies();
  }
}

export default ShowCurrencyRateService;
