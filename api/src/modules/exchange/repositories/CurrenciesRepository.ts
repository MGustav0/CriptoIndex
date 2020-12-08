import fs from 'fs';
import path from 'path';

import Currencies from '@modules/exchange/infra/data/models/Currencies';

class CurrenciesRepository {
  private currencies: Currencies;

  currenciesPath = `${path.resolve(
    `${__dirname}../../infra/data/currencies.json`,
  )}`;

  constructor() {
    const readFile = () => {
      const file = fs.readFileSync(this.currenciesPath);

      return JSON.parse(file.toString());
    };

    this.currencies = readFile();
  }

  public create(BRL: string, EUR: string, CAD: string): Currencies {
    const writeFile = content => {
      const updateFile = JSON.stringify(content);

      fs.writeFileSync(this.currenciesPath, updateFile);
    };

    this.currencies = new Currencies(BRL, EUR, CAD);

    writeFile(this.currencies);

    return this.currencies;
  }
}

export default CurrenciesRepository;
