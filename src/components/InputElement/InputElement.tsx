import React from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

import breakPoints from '../../breakPoints/breakPoints';

import { InputElementTypes } from '../../types/inputElementTypes';

const { larger2000 } = breakPoints;

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

const InputElement: React.FC<InputElementTypes> = ({ placeholder, prefix }) => {
  return <StyledInput placeholder={placeholder} prefix={prefix} />;
};

export default InputElement;
