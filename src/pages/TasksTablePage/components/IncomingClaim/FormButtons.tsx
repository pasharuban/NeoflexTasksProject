import React from 'react';
import styled from 'styled-components';

// for typing dispatch
import { ThunkDispatch } from 'redux-thunk';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCloseIncomingClaimForm, actionChangeStatusOfIncomingClaim } from '../../../../redux/actions';

import { State } from '../../../../types/stateTypes';
import { Action } from '../../../../redux/reducer';

import { IncomingClaimFormButtonsTypes } from '../../../../types/incomingClaimFormButtonsTypes';

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

const FormButtons: React.FC<IncomingClaimFormButtonsTypes> = ({
  closeIncomingClaimForm,
  changeStatusOfIncomingClaims,
}) => {
  return (
    <Container>
      <FormButton onClick={closeIncomingClaimForm} typeOfButton="notFilled" width="82px" type="button">
        Cancel
      </FormButton>
      <FormButton
        onClick={() => {
          changeStatusOfIncomingClaims('Done');
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
          changeStatusOfIncomingClaims('Declined');
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

const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchCloseIncomingClaimForm = bindActionCreators(actionCloseIncomingClaimForm, dispatch);
  const dispatchChangeStatusOfIncomingClaims = bindActionCreators(actionChangeStatusOfIncomingClaim, dispatch);

  return {
    closeIncomingClaimForm: dispatchCloseIncomingClaimForm,

    changeStatusOfIncomingClaims: (status: string) => {
      dispatchChangeStatusOfIncomingClaims(status);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormButtons);
