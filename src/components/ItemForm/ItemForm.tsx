import React from 'react';
import styled from 'styled-components';
import { Form } from 'antd';

import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { ButtonElement } from '../ButtonElement/ButtonElement';

import InputElement from '../InputElement/InputElement';

// styles for prefix(icon) inside input
const inputPrefixStyles = { color: '#ADADAD', fontSize: '20px' };

// customizing antd Form styles
const StyledForm = styled(Form)`
  width: 100%;
  min-width: 466px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & label {
    margin: 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 15px;

    letter-spacing: 2.5px;
    text-transform: uppercase;

    color: #adadad;
  }

  & .ant-form-item:last-of-type {
    margin: 0;
  }
`;

// customizing antd FormItem styles
const StyledFormItem = styled(Form.Item)`
  margin-bottom: 32px;
  width: 100%;
`;

export const ItemForm: React.FC<{ buttonText: string }> = ({ buttonText, children }) => {
  return (
    <StyledForm
      className="item-form"
      name="basic"
      labelCol={{ span: 24 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <StyledFormItem
        label="E-mail"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <InputElement placeholder="Type your e-mail" prefix={<MailOutlined style={inputPrefixStyles} />} />
      </StyledFormItem>

      <StyledFormItem
        label="Password"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
        <InputElement placeholder="Type your password" prefix={<LockOutlined style={inputPrefixStyles} />} />
      </StyledFormItem>

      {children}

      <ButtonElement text={buttonText} width="100%" typeOfButton="filled" marginTop="35px" />
    </StyledForm>
  );
};
