import React from 'react';
import styled from 'styled-components';
import { ItemForm } from '../ItemForm/ItemForm';

import closeFormLogo from '../../assets/img/close-form-icon_32.png';

const RegistrationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
`;

const CloseFormLogo = styled.img`
  align-self: flex-end;
  margin-bottom: 30px;
`;

export const RegistrationForm: React.FC = () => {
  return (
    <RegistrationFormContainer>
      <CloseFormLogo src={closeFormLogo} alt="close" />
      <ItemForm buttonText="Sign Up" />;
    </RegistrationFormContainer>
  );
};
