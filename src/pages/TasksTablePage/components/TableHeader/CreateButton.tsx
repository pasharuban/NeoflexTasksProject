import React from 'react';
import styled from 'styled-components';

// for typing dispatch
import { ThunkDispatch } from 'redux-thunk';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionOpenCreateNewClaimForm } from '../../../../redux/actions';
import { State } from '../../../../types/stateTypes';
import { Action } from '../../../../redux/reducer';

import iconPlus from '../../../../assets/TasksTablePage/icons/icon-plus.svg';

const CreateBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 174px;
  height: 48px;

  background: #7db59a;
  border-radius: 16px;

  outline: none;
  border: none;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.2px;

  color: #ffffff;

  transition: all 0.5s;

  &:hover {
    background-color: #4f896c;
    cursor: pointer;
  }
`;

const ButtonIcon = styled.img`
  padding: 0;
`;

const CreateButton: React.FC<{ openCreateNewClaimForm?: () => void }> = ({ openCreateNewClaimForm }) => {
  return (
    <CreateBtn onClick={openCreateNewClaimForm}>
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
