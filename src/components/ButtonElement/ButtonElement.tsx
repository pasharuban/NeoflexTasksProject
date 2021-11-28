import React from 'react';
import styled from 'styled-components';

import { ButtonElementTypes } from '../../types/buttonElementTypes';

import { minWidth } from '../../mediaQueries/mediaQueries';

import {
  buttonElementHoverBackground,
  buttonElementHoverColor,
  buttonElementHoverBorder,
  buttonElementActiveBackground,
  buttonElementActiveFontWeight,
  buttonElementActiveColor,
  buttonElementActiveBorder,
  buttonElementBackground,
  buttonElementColor,
  buttonElementBorder,
} from '../../utils/Colors/buttonElementColors';

import {
  buttonElementWidth,
  buttonElementMarginBottom,
  buttonElementMarginTop,
} from '../../utils/Markup/buttonElementMarkup';

const ButtonElement = styled.button<ButtonElementTypes>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;

  height: 48px;
  border-radius: 16px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 36px;

  transition: all 0.5s;

  ${(props) => buttonElementBackground(props.typeOfButton)};
  ${(props) => buttonElementColor(props.typeOfButton)};
  ${(props) => buttonElementBorder(props.typeOfButton)};

  width: ${(props) => buttonElementWidth(props.width)};
  margin-bottom: ${(props) => buttonElementMarginBottom(props.marginBottom)};
  margin-top: ${(props) => buttonElementMarginTop(props.marginTop)};

  ${minWidth.largeScreen} {
    height: 80px;
  }

  &:hover {
    cursor: pointer;

    ${(props) => buttonElementHoverBackground(props.typeOfButton)};
    ${(props) => buttonElementHoverColor(props.typeOfButton)};
    ${(props) => buttonElementHoverBorder(props.typeOfButton)};
  }

  &:active,
  &:focus {
    transition: all 0s;
    cursor: pointer;

    ${(props) => buttonElementActiveBackground(props.typeOfButton)};
    ${(props) => buttonElementActiveFontWeight(props.typeOfButton)};
    ${(props) => buttonElementActiveColor(props.typeOfButton)};
    ${(props) => buttonElementActiveBorder(props.typeOfButton)};
  }
`;

export default ButtonElement;
