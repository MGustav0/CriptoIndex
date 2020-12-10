import CurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

interface IRequestDTO {
  usdTime: string;
  usdDisclaimer: string;
  usdBpi: string;
  brlCode: string;
  brlDescription: string;
  eurCode: string;
  eurDescription: string;
  cadCode: string;
  cadDescription: string;
  btcBpi: string;
  usdPrice: string;
}

type IResponse = {
  time: string;
  disclaimer: string;
  USD: string;
  BRL: {
    code: string;
    rate: string;
    description: string;
    rate_float: number;
  };
  EUR: {
    code: string;
    rate: string;
    description: string;
    rate_float: number;
  };
  CAD: {
    code: string;
    rate: string;
    description: string;
    rate_float: number;
  };
  BTC: string;
};

class CreateEndpointReturnService {
  private currenciesRepository: CurrenciesRepository;

  constructor(currenciesRepository: CurrenciesRepository) {
    this.currenciesRepository = currenciesRepository;
  }

  public execute({
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
  }: IRequestDTO): IResponse {
    const dataCurrencies = this.currenciesRepository.findCurrencies();

    const time = usdTime;
    const disclaimer = usdDisclaimer;

    const USD = usdBpi;

    const dataBrl = dataCurrencies.BRL;
    const dataEur = dataCurrencies.EUR;
    const dataCad = dataCurrencies.CAD;

    const rateBrl = parseFloat(dataBrl) * parseFloat(usdPrice.replace(/,/, ''));

    const btcBrlRate = rateBrl.toFixed(4);
    const btcBrlRateFloat = parseFloat(btcBrlRate);

    const BRL = {
      code: brlCode,
      rate: btcBrlRate,
      description: brlDescription,
      rate_float: btcBrlRateFloat,
    };

    const rateEur = parseFloat(dataEur) * parseFloat(usdPrice.replace(/,/, ''));

    const btcEurRate = rateEur.toFixed(4);
    const btcEurRateFloat = parseFloat(btcEurRate);

    const EUR = {
      code: eurCode,
      rate: btcBrlRate,
      description: eurDescription,
      rate_float: btcEurRateFloat,
    };

    const rateCad = parseFloat(dataCad) * parseFloat(usdPrice.replace(/,/, ''));

    const btcCadRate = rateCad.toFixed(4);
    const btcCadRateFloat = parseFloat(btcCadRate);

    const CAD = {
      code: cadCode,
      rate: btcBrlRate,
      description: cadDescription,
      rate_float: btcCadRateFloat,
    };

    const BTC = btcBpi;

    const endpointReturn = {
      time,
      disclaimer,
      USD,
      BRL,
      EUR,
      CAD,
      BTC,
    };

    return endpointReturn;
  }
}

export default CreateEndpointReturnService;
