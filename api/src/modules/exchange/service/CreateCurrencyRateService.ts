import { injectable, inject } from 'tsyringe';

import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import CurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

interface IRequestDTO {
  usdPrice: string;
  brlPrice: string;
  eurPrice: string;
  cadPrice: string;
}

@injectable()
class UpdateCurrenciesRateService {
  constructor(
    @inject('CurrenciesRepository')
    private currenciesRepository: CurrenciesRepository,
  ) {}

  public execute({
    usdPrice,
    brlPrice,
    eurPrice,
    cadPrice,
  }: IRequestDTO): Currencies {
    const brlExchangeRate = parseFloat(brlPrice) / parseFloat(usdPrice);
    const eurExchangeRate = parseFloat(eurPrice) / parseFloat(usdPrice);
    const cadExchangeRate = parseFloat(cadPrice) / parseFloat(usdPrice);

    const BRL = brlExchangeRate.toFixed(3);
    const EUR = eurExchangeRate.toFixed(3);
    const CAD = cadExchangeRate.toFixed(3);

    const currenciesJSON = this.currenciesRepository.save({
      BRL,
      EUR,
      CAD,
    });

    return currenciesJSON;
  }
}

export default UpdateCurrenciesRateService;
