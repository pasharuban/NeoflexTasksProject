import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { MailOutlined, LockOutlined } from '@ant-design/icons';

import FormItemElement from '../FormItemElement/FormItemElement';
import InputElement from '../InputElement/InputElement';

import { ItemForm } from '../ItemForm/ItemForm';
import { ButtonElement } from '../ButtonElement/ButtonElement';

import closeFormLogo from '../../assets/MainPage/icons/close-form-icon_32.png';

import { mapDispatchToProps } from '../RequestRegistration/RequestRegistration';

// styles for prefix(icon) inside input
const inputPrefixStyles = { color: '#ADADAD', fontSize: '20px' };

const CloseFormLogo = styled.img`
  align-self: flex-end;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.1);
  }
`;

const RegistrationForm: React.FC<{ updateRegistrationForm?: () => void }> = ({ updateRegistrationForm }) => {
  return (
    <ItemForm>
      <CloseFormLogo onClick={updateRegistrationForm} src={closeFormLogo} alt="close" />
      <FormItemElement
        label="E-mail"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <InputElement placeholder="Type your e-mail" prefix={<MailOutlined style={inputPrefixStyles} />} />
      </FormItemElement>

      <FormItemElement
        label="Password"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
        <InputElement placeholder="Type your password" prefix={<LockOutlined style={inputPrefixStyles} />} />
      </FormItemElement>
      <ButtonElement text="Sign Up" typeOfButton="filled" width="100%" marginTop="40px" />
    </ItemForm>
  );
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
