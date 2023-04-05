import styled from "styled-components";

export const DivInput = styled.div`
  margin-bottom: 1rem;

  .error-message {
    color: var(--negative);
  }
`;

export const StyledInput = styled.input`
  background-color: var(--grey-2);
  color: var(--grey-0);

  border: 1px solid transparent;
  border-radius: 5px;

  padding: 1rem 0.5rem;

  &::placeholder {
    color: var(--grey-1);
  }

  &:focus {
    outline: var(--grey-0) solid 1px;

    &::placeholder {
      color: var(--grey-0);
    }
  }
`;

export const StyledPasswordInput = styled(StyledInput)`
  padding: 1rem 2.5rem 1rem 0.5rem;
`;

export const StyledSelectInput = styled.select`
  width: 100%;

  background-color: var(--grey-2);
  color: var(--grey-1);

  border: 1px solid transparent;
  border-radius: 5px;

  padding: 1rem 0.2rem 1rem 0.5rem;

  margin-bottom: 1rem;

  &:focus {
    outline: var(--grey-0) solid 1px;

    color: var(--grey-0);
  }
`;

export const PasswordDiv = styled.div`
  position: relative;

  & > input {
    width: 100%;
  }

  & > button {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-45%);

    border: 1px solid transparent;

    background: none;

    & > svg {
      width: 1.5rem;
      height: 1.5rem;

      color: var(--grey-1);

      transition: 0.5s ease;

      &:hover {
        color: var(--grey-0);
      }
    }
  }
`;
