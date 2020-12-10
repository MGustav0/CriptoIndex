import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import CurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

interface IRequestDTO {
  usdPrice: string;
  brlPrice: string;
  eurPrice: string;
  cadPrice: string;
}

class CreateCurrencyRateService {
  private currenciesRepository: CurrenciesRepository;

  constructor(currenciesRepository: CurrenciesRepository) {
    this.currenciesRepository = currenciesRepository;
  }

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

    const currenciesJSON = this.currenciesRepository.create({
      BRL,
      EUR,
      CAD,
    });

    return currenciesJSON;
  }
}

export default CreateCurrencyRateService;
