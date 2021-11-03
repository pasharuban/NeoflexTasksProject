import React from 'react';
import styled from 'styled-components';

import { ButtonElementTypes } from '../../types/buttonElementTypes';

const Button = styled.button<ButtonElementTypes>`
  height: 47px;
  border-radius: 50px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;

  transition: all 0.5s;

  &:hover {
    background: #4f896c;
    cursor: pointer;
  }

  width: ${(props) => {
    const { width } = props;
    if (width) return width;

    return '200px';
  }};

  margin-bottom: ${(props) => {
    const { marginBottom } = props;
    if (marginBottom) return marginBottom;

    return 0;
  }};

  margin-top: ${(props) => {
    const { marginTop } = props;
    if (marginTop) return marginTop;

    return 0;
  }};

  background: ${(props) => {
    const { typeOfButton } = props;
    if (typeOfButton === 'filled') return '#7DB59A';

    return 'none';
  }};

  color: ${(props) => {
    const { typeOfButton } = props;
    if (typeOfButton === 'filled') return '#FFFFFF;';

    return '#5193F4;';
  }};

  border: ${(props) => {
    const { typeOfButton } = props;
    if (typeOfButton === 'filled') return 'none';

    return '1px solid #5193F4;';
  }};
`;

export const ButtonElement: React.FC<ButtonElementTypes> = ({
  text,
  typeOfButton,
  marginBottom,
  marginTop,
  onClickCallback,
  width,
}) => {
  return (
    <Button
      onClick={onClickCallback}
      width={width}
      typeOfButton={typeOfButton}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      {text}
    </Button>
  );
};
