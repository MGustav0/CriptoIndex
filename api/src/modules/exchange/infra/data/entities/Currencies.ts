class Currencies {
  BRL: string;

  EUR: string;

  CAD: string;

  constructor({ BRL, EUR, CAD }: Currencies) {
    this.BRL = BRL;
    this.EUR = EUR;
    this.CAD = CAD;
  }
}

export default Currencies;
