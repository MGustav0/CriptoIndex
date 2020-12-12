import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/apiClient';

import {
  Container,
  Content,
  AnimationContainer,
  ContainerCurrencies,
} from './styles';

interface IPrices {
  USD: {
    code: string;
    rate_float: number;
  };
  BRL: {
    code: string;
    rate_float: number;
  };
  EUR: {
    code: string;
    rate_float: number;
  };
  CAD: {
    code: string;
    rate_float: number;
  };
  BTC: {
    code: string;
    rate_float: number;
  };
}

interface ICurrencies {
  calcUSD: number;
  calcBRL: number;
  calcEUR: number;
  calcCAD: number;
}

const Home: React.FC = () => {
  const [prices, setPrices] = useState<IPrices>();
  const [currencies, setCurrencies] = useState<ICurrencies>();
  const [inputBtc, setInputBtc] = useState<number>(1);

  useEffect(() => {
    api.get('/api/crypto/btc').then(response => {
      setPrices(response.data);
    });
  }, []);

  // const handleCreateRateCurrencies = useCallback(() => {
  //   api.get('/api/crypto/btc/coindesk').then(response => {
  //     setCurrencies(response.data);
  //   });
  // }, []);

  const handleInputOnChange = useCallback(
    e => {
      setInputBtc(e);

      const calcUSD = prices!.USD.rate_float * e;
      const calcBRL = prices!.BRL.rate_float * e;
      const calcEUR = prices!.EUR.rate_float * e;
      const calcCAD = prices!.CAD.rate_float * e;

      setCurrencies({ calcUSD, calcBRL, calcEUR, calcCAD });
    },
    [prices],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <button type="submit">
            Atualizar valor monetário
            {/* {() => handleCreateRateCurrencies} */}
          </button>

          <div className="btcInput">
            <span>{prices?.BTC.code}</span>
            <input
              type="text"
              onChange={e => handleInputOnChange(e.target.value)}
              placeholder="1"
            />
          </div>

          <ContainerCurrencies>
            <div>
              <span>{prices?.USD.code}</span>
              <Link to="/update-currency">
                {currencies?.calcUSD.toFixed(2).replace('.', ',')}
              </Link>
            </div>
            <div>
              <span>{prices?.BRL.code}</span>
              <Link to="/update-currency">
                {currencies?.calcBRL.toFixed(2).replace('.', ',')}
              </Link>
            </div>
            <div>
              <span>{prices?.EUR.code}</span>
              <Link to="/update-currency">
                {currencies?.calcEUR.toFixed(2).replace('.', ',')}
              </Link>
            </div>
            <div>
              <span>{prices?.CAD.code}</span>
              <Link to="/update-currency">
                {currencies?.calcCAD.toFixed(2).replace('.', ',')}
              </Link>
            </div>
          </ContainerCurrencies>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Home;
