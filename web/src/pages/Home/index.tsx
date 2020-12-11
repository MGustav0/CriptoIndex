import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Content, AnimationContainer, CurrencyBTC } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <button type="button">Atualizar valor monetário</button>

          <CurrencyBTC>1</CurrencyBTC>

          <Link to="/">USD</Link>
          <Link to="/">BRL</Link>
          <Link to="/">EUR</Link>
          <Link to="/">CAD</Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Home;
