import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actionUpdateRegistrationForm } from '../../../../redux/actions/actionCreators';
import { ActionTypeTypes } from '../../../../types/actionTypeTypes';

const RequestRegistrationContainer = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RequestRegistrationText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.16rem;
  line-height: 17px;

  color: #2d3436;
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

export const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTypes>) => {
  const dispatchUpdateRegistrationForm = bindActionCreators(actionUpdateRegistrationForm, dispatch);

  return {
    updateRegistrationForm: dispatchUpdateRegistrationForm,
  };
};

export default connect(null, mapDispatchToProps)(RequestRegistration);
