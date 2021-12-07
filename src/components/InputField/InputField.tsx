import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { Input, Form } from 'antd';

import { InputFieldTypes } from '../../types/inputFieldTypes';

import { minWidth } from '../../mediaQueries/mediaQueries';

const placeholderStyles = css`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;

  color: #2d3436;
`;

// customizing antd FormItem styles
const StyledFormItem = styled(Form.Item)`
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
  input {
    &:disabled {
      &::placeholder {
        color: #adadad;
      }
    }
    &::placeholder {
      ${placeholderStyles};
    }
  }
`;

const InputElement = styled(Input)`
  height: 48px;
  width: 100%;
  border-radius: 16px;
  border: none;
  background: #f0f0f0;
  font-size: 1.5rem;

  padding: 0 16px;

  ${minWidth.largeScreen} {
    height: 80px;
  }

  & input {
    background: inherit;
    border-radius: inherit;
  }
`;

const InputField: React.FC<InputFieldTypes> = ({ label, name, rules, placeholder, suffix, disabled, type }) => {
  return (
    <StyledFormItem label={label} name={name} rules={rules}>
      <InputElement placeholder={placeholder} suffix={suffix} disabled={disabled} type={type} />
    </StyledFormItem>
  );
};

export default InputField;
