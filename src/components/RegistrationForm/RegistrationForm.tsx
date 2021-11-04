import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { ItemForm } from '../ItemForm/ItemForm';

import closeFormLogo from '../../assets/img/close-form-icon_32.png';

import { mapDispatchToProps } from '../RequestRegistration/RequestRegistration';


const RegistrationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CloseFormLogo = styled.img`
  align-self: flex-end;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.1);
  }
`;

const RegistrationForm: React.FC<{ updateRegistrationForm?: () => void }> = ({ updateRegistrationForm }) => {
  return (
    <>
      <RegistrationFormContainer>
        <CloseFormLogo onClick={updateRegistrationForm} src={closeFormLogo} alt="close" />
        <ItemForm buttonText="Sign Up" />
      </RegistrationFormContainer>
    </>
  );
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
