import React from 'react';
import styled from 'styled-components';
import { Form, Input } from 'antd';

import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { ButtonElement } from '../ButtonElement/ButtonElement';

import breakPoints from '../../breakPoints/breakPoints';

const { larger2000 } = breakPoints;

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

const StyledInput = styled(Input)`
  height: 48px;
  border-radius: 16px;
  border: none;
  background: #f0f0f0;

  margin: 0;
  padding: 0 16px;

  @media screen and (min-width: ${larger2000}) {
    height: 80px;
  }

  input {
    //input in antd has a wrapper(we set color for it)
    //input field has another default bg color(white),so we need to inherit wapper's color.
    background: inherit;
    //we need input first,next icon(prefix for input)
    order: -1;
    border-radius: inherit;

    &::placeholder {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;

      color: #2d3436;
    }
  }
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
