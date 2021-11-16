import React from 'react';

import { MailOutlined } from '@ant-design/icons';

import ItemForm from '../ItemForm/ItemForm';

import CheckboxField from '../CheckboxField/CheckboxField';
import InputField from '../InputField/InputField';

import ButtonElement from '../ButtonElement/ButtonElement';

import RequestRegistration from '../RequestRegistration/RequestRegistration';

// styles for prefix(icon) inside input
const inputSuffixStyles = { color: '#ADADAD', fontSize: '20px' };

const LoginForm: React.FC = () => {
  return (
    <ItemForm>
      <InputField
        label="E-mail"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
        placeholder="Type your e-mail"
        suffix={<MailOutlined style={inputSuffixStyles} />}
      />

      <InputField
        label="Password"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
        placeholder="Type your password"
        
      />

      <CheckboxField
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
        text="Keep me logged in"
      />

      <ButtonElement marginBottom="16px" typeOfButton="filledGreen" width="100%">
        Login
      </ButtonElement>

      <RequestRegistration />
    </ItemForm>
  );
};

export default LoginForm;
