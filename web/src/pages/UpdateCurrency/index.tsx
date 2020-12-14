import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { MdAttachMoney } from 'react-icons/md';

import api from '../../services/apiClient';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer } from './styles';

interface ICurrencies {
  currenciesRepository: {
    currencies: {
      BRL: string;
      EUR: string;
      CAD: string;
    };
  };
}

interface ISubmit {
  currency: string;
  value: number;
}

const UpdateCurrency: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [prices, setPrices] = useState<ICurrencies>();
  const [price, setPrice] = useState('');
  const [symbol, setSymbol] = useState('');

  const history = useHistory();

  const handleSubmit = useCallback(
    async (formData: ISubmit) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          currency: Yup.string(),
          value: Yup.number().positive().truncate(),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        api.put('/api/crypto/btc', formData);

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  useEffect(() => {
    api.get('/api/crypto/btc/currencies').then(response => {
      setPrices(response.data);
    });
  }, []);

  const handleSelectOnChange = useCallback(
    e => {
      if (e === 'BRL') {
        const priceCoin = prices!.currenciesRepository.currencies.BRL;
        setPrice(priceCoin);
        setSymbol('R$');
      } else if (e === 'EUR') {
        const priceCoin = prices!.currenciesRepository.currencies.EUR;
        setPrice(priceCoin);
        setSymbol('€');
      } else if (e === 'CAD') {
        const priceCoin = prices!.currenciesRepository.currencies.CAD;
        setPrice(priceCoin);
        setSymbol('C$');
      } else {
        const priceCoin = '0,00';
        setPrice(priceCoin);
      }
    },
    [prices],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/" className="goBack">
            Voltar
          </Link>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Select
                name="currency"
                label="Moeda"
                onChange={e => handleSelectOnChange(e.target.value)}
                options={[
                  { value: 'BRL', label: 'BRL' },
                  { value: 'EUR', label: 'EUR' },
                  { value: 'CAD', label: 'CAD' },
                ]}
              />
            </div>

            <div className="actualValue">
              <span>Valor atual: </span>
              <data>
                {symbol} {price}
              </data>
            </div>

            <div>
              <span>Novo Valor</span>
              <Input
                name="value"
                icon={MdAttachMoney}
                type="value"
                placeholder="Digite o novo valor"
              />
            </div>

            <Button type="submit">ATUALIZAR</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default UpdateCurrency;
