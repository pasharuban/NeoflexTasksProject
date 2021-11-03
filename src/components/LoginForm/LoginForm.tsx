import React from 'react';
import styled from 'styled-components';

import { Checkbox, Form } from 'antd';

import { ItemForm } from '../ItemForm/ItemForm';

import FormContainer from '../../containers/FormContainer/FormContainer';

import RequestRegistration from '../RequestRegistration/RequestRegistration';

const StyledCheckbox = styled.div`
  width: 100%;
  float: left;
  label {
    text-transform: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #2d3436;
  }
`;

const StyledFormItem = styled(Form.Item)`
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
    <FormContainer>
      <ItemForm buttonText="Login">
        <StyledFormItem name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <StyledCheckbox>
            <Checkbox>Keep me logged in</Checkbox>
          </StyledCheckbox>
        </StyledFormItem>
      </ItemForm>

      <RequestRegistration />
    </FormContainer>
  );
};

export default LoginForm;
