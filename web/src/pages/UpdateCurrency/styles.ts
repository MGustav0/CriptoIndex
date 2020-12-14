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
  max-width: 1440px;
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
  background-color: #ffffff;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  max-height: 1024px;
  border-radius: 10px;

  font-size: 50px;

  animation: ${appearFromLeft} 1s;

  .goBack {
    height: 78px;
    width: 258px;
    margin: 45px;
    border: none;
    border-radius: 10px;
    background-color: #c4c4c4;
    color: #000000;
    text-align: center;
    padding: 10px;

    text-decoration: none;
  }

  form {
    width: 100%;
    max-width: 698px;
    align-self: center;
    text-align: center;
    font-size: 50px;

    input {
      height: 71px;
      font-size: 50px;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }

  div {
    text-align: start;
  }

  select {
    width: 100%;
    max-width: 698px;
    height: 107px;
    align-self: center;
    font-size: 50px;
    margin-bottom: 54px;
  }

  .actualValue {
    margin-bottom: 48px;
  }

  button {
    height: 107px;
    font-size: 50px;
  }
`;
