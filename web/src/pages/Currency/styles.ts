import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  background-color: #e5e5e5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  margin: 0 auto;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  background-color: #ffffff;
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 700px;
  border-radius: 10px;

  animation: ${appearFromLeft} 1s;
`;

export const CurrencyBTC = styled.div``;
