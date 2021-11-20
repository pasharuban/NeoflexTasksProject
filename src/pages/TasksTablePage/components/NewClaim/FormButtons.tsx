import React from 'react';
import styled from 'styled-components';

// for typing dispatch
import { ThunkDispatch } from 'redux-thunk';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionOpenCreateNewClaimForm } from '../../../../redux/actions';

import { State } from '../../../../types/stateTypes';
import { Action } from '../../../../redux/reducer';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

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
`;

const FormButtons: React.FC<{ openCreateNewClaimForm?: () => void }> = ({ openCreateNewClaimForm }) => {
  return (
    <Container>
      <FormButton onClick={openCreateNewClaimForm} typeOfButton="notFilled" width="82px">
        Cancel
      </FormButton>
      <FormButton typeOfButton="filledGreen" width="82px">
        Create
      </FormButton>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchOpenCreateNewClaimForm = bindActionCreators(actionOpenCreateNewClaimForm, dispatch);

  return {
    openCreateNewClaimForm: dispatchOpenCreateNewClaimForm,
  };
};

export default connect(null, mapDispatchToProps)(FormButtons);
