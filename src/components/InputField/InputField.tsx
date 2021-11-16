import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { Input, Form } from 'antd';

import { InputFieldTypes } from '../../types/inputFieldTypes';

import breakPoints from '../../breakPoints/breakPoints';

const { larger2000 } = breakPoints;
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

  margin: 0;
  padding: 0 16px;

  @media screen and (min-width: ${larger2000}) {
    height: 80px;
  }

  & input {
    background: inherit;
    border-radius: inherit;
  }
`;

const InputField: React.FC<InputFieldTypes> = ({ label, name, rules, placeholder, suffix, disabled }) => {
  return (
    <StyledFormItem label={label} name={name} rules={rules}>
      <InputElement placeholder={placeholder} suffix={suffix} disabled={disabled} />
    </StyledFormItem>
  );
};

export default InputField;
