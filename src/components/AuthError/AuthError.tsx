import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { closeErrorMessage } from '../../redux/actionCreators';

import { getAuthErrorMessage } from '../../redux/selectors/selectors';

import Close from '../Close/Close';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 5px gray;
  border-radius: 10px;
`;

const ErrorContent = styled.div`
  width: 90%;
  min-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
`;

const ComponentTitle = styled.h1`
  font-family: inherit;
  color: #a00505;

  margin-bottom: 20px;

  font-size: 35px;
`;

const ErrorMessage = styled.p`
  font-family: inherit;

  font-size: 20px;
`;

const AuthError: React.FC<{ authTitle: string }> = ({ authTitle }) => {
  const errorMessage = useSelector(getAuthErrorMessage);
  const dispatch = useDispatch();

  return (
    <Container>
      <Close onClick={() => dispatch(closeErrorMessage())} />
      <ErrorContent>
        <ComponentTitle>{authTitle}!</ComponentTitle>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorContent>
    </Container>
  );
};

export default AuthError;
