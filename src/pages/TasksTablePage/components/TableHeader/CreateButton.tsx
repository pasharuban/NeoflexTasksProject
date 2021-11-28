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

import iconPlus from '../../../../assets/TasksTablePage/icons/icon-plus.svg';

const CreateBtn = styled(ButtonElement)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonIcon = styled.img``;

const CreateButton: React.FC<{ openCreateNewClaimForm?: () => void }> = ({ openCreateNewClaimForm }) => {
  return (
    <CreateBtn onClick={openCreateNewClaimForm} typeOfButton="filledGreen" width="174px">
      <ButtonIcon src={iconPlus} alt="alt" />
      Create claim
    </CreateBtn>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchOpenCreateNewClaimForm = bindActionCreators(actionOpenCreateNewClaimForm, dispatch);

  return {
    openCreateNewClaimForm: dispatchOpenCreateNewClaimForm,
  };
};

export default connect(null, mapDispatchToProps)(CreateButton);
