import fs from 'fs';
import path from 'path';

import Currencies from '@modules/exchange/infra/data/entities/Currencies';

import ICurrenciesRepository from '@modules/exchange/repositories/ICurrenciesRepository';

import ICurrenciesDTO from '@modules/exchange/dtos/ICurrenciesDTO';

class CurrenciesRepository implements ICurrenciesRepository {
  private currencies: Currencies;

  currenciesPath = `${path.resolve(`${__dirname}../../currencies.json`)}`;

  readFile = () => {
    const file = fs.readFileSync(this.currenciesPath);

    return JSON.parse(file.toString());
  };

  writeFile = content => {
    const updateFile = JSON.stringify(content);

    fs.writeFileSync(this.currenciesPath, updateFile);
  };

  constructor() {
    this.currencies = this.readFile();
  }

  public save({ BRL, EUR, CAD }: ICurrenciesDTO): Currencies {
    this.currencies = new Currencies({ BRL, EUR, CAD });

    this.writeFile(this.currencies);

    return this.currencies;
  }

  public findCurrencies(): Currencies {
    this.currencies = this.readFile();

    return this.currencies;
  }
}

export default CurrenciesRepository;
