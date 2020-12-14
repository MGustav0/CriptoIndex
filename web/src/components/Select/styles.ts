import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-size: 50px;

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    padding: 0 1.6rem;
    color: var(--color-text-complement);
    font-size: 50px;
  }

  &:focus-within::after {
    content: '';
    width: calc(100% - 3.2rem);
    height: 2px;
    background: ${({ theme }) =>
      theme.title === 'light'
        ? 'var(--color-primary-light)'
        : 'var(--color-primary-darker)'};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
  > svg {
    position: absolute;
    right: 12px;
    top: 52%;
    pointer-events: none;
    user-select: none;
    path {
      color: var(--color-icons);
    }
  }
  & + div {
    margin-top: 2.4rem;
  }
  @media (min-width: 700px) {
    > select {
      font-size: 1.2rem;
    }
  }
`;
