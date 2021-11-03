import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { ThunkDispatch } from 'redux-thunk';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUpdateRegistrationForm } from '../../redux/actions';

import { State, Action } from '../../redux/reducer';

const textStyles = css`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #2d3436;
`;

const RequestRegistrationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;

const RequestRegistrationText = styled.p`
  ${textStyles}
`;

const RequestRegistrationLink = styled.span`
  color: #31b8b8;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    color: #1d9494;
  }
`;

const RequestRegistration: React.FC<{ updateRegistrationForm?: () => void }> = ({ updateRegistrationForm }) => {
  return (
    <RequestRegistrationContainer>
      <RequestRegistrationText>
        Not a member?
        <RequestRegistrationLink onClick={updateRegistrationForm}>Request registration.</RequestRegistrationLink>
      </RequestRegistrationText>
    </RequestRegistrationContainer>
  );
};

export const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchUpdateRegistrationForm = bindActionCreators(actionUpdateRegistrationForm, dispatch);

  return {
    updateRegistrationForm: dispatchUpdateRegistrationForm,
  };
};

export default connect(null, mapDispatchToProps)(RequestRegistration);
