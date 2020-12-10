import fs from 'fs';
import path from 'path';

import Currencies from '@modules/exchange/infra/data/entities/Currencies';

interface ICurrenciesDTO {
  BRL: string;
  EUR: string;
  CAD: string;
}

class CurrenciesRepository {
  private currencies: Currencies;

  currenciesPath = `${path.resolve(
    `${__dirname}../../infra/data/currencies.json`,
  )}`;

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

  public create({ BRL, EUR, CAD }: ICurrenciesDTO): Currencies {
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
