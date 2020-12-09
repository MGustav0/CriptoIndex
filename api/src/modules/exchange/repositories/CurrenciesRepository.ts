import fs from 'fs';
import path from 'path';

import Currencies from '@modules/exchange/infra/data/entities/Currencies';

interface ICreateCurrenciesDTO {
  brlRate: string;
  eurRate: string;
  cadRate: string;
}

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

  public create({
    brlRate,
    eurRate,
    cadRate,
  }: ICreateCurrenciesDTO): Currencies {
    const writeFile = content => {
      const updateFile = JSON.stringify(content);

      fs.writeFileSync(this.currenciesPath, updateFile);
    };

    this.currencies = new Currencies({ brlRate, eurRate, cadRate });

    writeFile(this.currencies);

    return this.currencies;
  }

  public findCurrencies(): Currencies {
    const readFile = () => {
      const file = fs.readFileSync(this.currenciesPath);

      return JSON.parse(file.toString());
    };

    this.currencies = readFile();

    return this.currencies;
  }
}

export default CurrenciesRepository;
