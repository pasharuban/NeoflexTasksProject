import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';
import { handleRedirectToDashboard } from '../../../../utils/HelperFunctions/helperFunctions';

import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import {
  getPostDataErrorMessage,
  getPostDataLoadingState,
  getPostDataErrorState,
} from '../../../../redux/selectors/selectors';

const FormButton = styled(ButtonElement)`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 34px;

  align-self: flex-start;
`;

const ErrorMessage = styled.h2`
  color: red;
`;

const FormButtons: React.FC = () => {
  const history = useHistory();

  const loading = useSelector(getPostDataLoadingState);
  const error = useSelector(getPostDataErrorState);
  const errorMessage = useSelector(getPostDataErrorMessage);

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <FormButton
        onClick={() => handleRedirectToDashboard(history)}
        typeOfButton="notFilled"
        width="82px"
        type="button"
      >
        Cancel
      </FormButton>
      <FormButton typeOfButton="filledGreen" width="82px">
        Create
      </FormButton>
    </Container>
  );
};

export default FormButtons;
