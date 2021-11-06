import React from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';

import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { ButtonElement } from '../ButtonElement/ButtonElement';

const inputPrefixStyles = { color: '#ADADAD', fontSize: '20px' };

const StyledForm = styled(Form)`
  width: 100%;
  min-width: 466px;

  border: 2px solid red;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  & label {
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 2.5px;
    text-transform: uppercase;

    color: #adadad;
  }

  & .ant-form-item:last-of-type {
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  height: 48px;

  border-radius: 16px;
  border: none;
  background: #f0f0f0;

  margin: 0;
  padding: 0;

  input {
    //input in antd has a wrapper(we set color for it)
    //input field has another default color(white),so we need to inherit wapper's color.
    background: inherit;
    //we need input first,then icon(prefix for input)
    order: -1;

    &::placeholder {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;

      color: #2d3436;
    }
  }
`;

const StyledFormItem = styled(Form.Item)`
  display: flex;

  margin-bottom: 32px;
  width: 100%;

  border: 2px solid green;

  .ant-form-item-control {
    margin: 0;
  }
`;

export const ItemForm: React.FC<{ buttonText: string }> = ({ buttonText, children }) => {
  return (
    <StyledForm
      className="item-form"
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <StyledFormItem
        label="E-mail"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <StyledInput placeholder="Type your e-mail" prefix={<MailOutlined style={inputPrefixStyles} />} />
      </StyledFormItem>

      <StyledFormItem
        label="Password"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
        <StyledInput placeholder="Type your password" prefix={<LockOutlined style={inputPrefixStyles} />} />
      </StyledFormItem>

      {children}

      <ButtonElement text={buttonText} width="100%" typeOfButton="filled" marginTop="35px" />
    </StyledForm>
  );
};
