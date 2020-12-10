import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import ICurrenciesDTO from '@modules/exchange/dtos/ICurrenciesDTO';

export default interface ICurrenciesRepository {
  create({ BRL, EUR, CAD }: ICurrenciesDTO): Currencies;
  findCurrencies(): Currencies;
}
