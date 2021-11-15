import React from 'react';
import styled from 'styled-components';

import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Checkbox } from 'antd';

import { ItemForm } from '../ItemForm/ItemForm';

import FormItemElement from '../FormItemElement/FormItemElement';
import InputElement from '../InputElement/InputElement';
import { ButtonElement } from '../ButtonElement/ButtonElement';

import RequestRegistration from '../RequestRegistration/RequestRegistration';

// styles for prefix(icon) inside input
const inputPrefixStyles = { color: '#ADADAD', fontSize: '20px' };

type styledFormItemTypes = {
  name: string;
  valuePropName: string;
  wrapperCol: any;
};

const StyledCheckbox = styled.div`
  width: 100%;
  float: left;
  label {
    text-transform: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.16rem;
    line-height: 17px;

    color: #2d3436;
  }
`;

const StyledFormItem = styled(FormItemElement)<styledFormItemTypes>`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 32px;
  width: 100%;

  .ant-form-item-control {
    margin: 0;
  }
`;

const LoginForm: React.FC = () => {
  return (
    <ItemForm>
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

      <FormItemElement>
        <StyledFormItem name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <StyledCheckbox>
            <Checkbox>Keep me logged in</Checkbox>
          </StyledCheckbox>
        </StyledFormItem>
      </FormItemElement>

      <ButtonElement marginBottom="16px" typeOfButton="filled" width="100%">
        Login
      </ButtonElement>

      <RequestRegistration />
    </ItemForm>
  );
};

export default LoginForm;
