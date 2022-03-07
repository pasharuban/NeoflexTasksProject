import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

import { handleRedirectToDashboard } from '../../../../utils/HelperFunctions/helperFunctions';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import {
  getCurrentClaimState,
  getUpdateClaimError,
  getUpdateClaimErrorMessage,
  getUpdateClaimLoading,
} from '../../../../redux/selectors/selectors';

import actionUpdateCurrentClaim from '../../../../redux/actions/actionUpdateCurrentClaim';

import { actionCloseCurrentClaim } from '../../../../redux/actions/actionCreators';

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
  const dispatch = useDispatch();
  const currentClaim = useSelector(getCurrentClaimState);
  const { title, description, type, _id } = currentClaim;

  const createUpdatedClaim = (status: string) => {
    return {
      title,
      description,
      type: type?.slug,
      status,
    };
  };

  const error = useSelector(getUpdateClaimError);
  const errorMessage = useSelector(getUpdateClaimErrorMessage);
  const loading = useSelector(getUpdateClaimLoading);

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
        onClick={() => {
          dispatch(actionCloseCurrentClaim());
          handleRedirectToDashboard(history);
        }}
        typeOfButton="notFilled"
        width="82px"
        type="button"
      >
        Cancel
      </FormButton>
      <FormButton
        onClick={() => {
          dispatch(actionUpdateCurrentClaim(createUpdatedClaim('done'), _id));
        }}
        typeOfButton="filledGreen"
        width="82px"
        value="Done"
        type="button"
      >
        Done
      </FormButton>
      <FormButton
        onClick={() => {
          dispatch(actionUpdateCurrentClaim(createUpdatedClaim('decl'), _id));
        }}
        typeOfButton="filledPink"
        width="82px"
        value="Decline"
        type="button"
      >
        Decline
      </FormButton>
    </Container>
  );
};

export default FormButtons;
