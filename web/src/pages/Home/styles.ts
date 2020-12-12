import styled, { keyframes } from 'styled-components';

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
  align-items: center;
  place-content: center;
  background-color: #ffffff;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  max-height: 1024px;
  border-radius: 10px;

  animation: ${appearFromLeft} 1s;

  button {
    width: 100%;
    max-width: 740px;
    height: 99px;

    border: none;
    background-color: #c4c4c4;
    font-size: 50px;
  }

  .btcInput {
    display: flex;
    flex-direction: column;
    margin-top: 124px;

    span {
      font-size: 50px;
      text-align: center;
    }

    input {
      background: #c4c4c4;
      border-radius: 0px;
      border: none;

      width: 100%;
      max-width: 1078px;
      height: 98px;

      text-align: start;

      width: 242px;

      font-size: 50px;
      text-align: center;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const ContainerCurrencies = styled.div`
  width: 100%;
  max-width: 1078px;
  height: 160px;
  margin-top: 46px;

  display: flex;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 50px;
    }

    a {
      width: 242px;
      background-color: #c4c4c4;
      height: 98px;

      font-size: 50px;
      text-decoration: none;
      color: #000000;
      padding: 20px;
    }
  }
`;
