class Currencies {
  brlRate: string;

  eurRate: string;

  cadRate: string;

  constructor({ brlRate, eurRate, cadRate }: Currencies) {
    this.brlRate = brlRate;
    this.eurRate = eurRate;
    this.cadRate = cadRate;
  }
}

export default Currencies;
