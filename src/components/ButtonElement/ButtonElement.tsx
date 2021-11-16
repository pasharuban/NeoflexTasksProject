import React from 'react';
import styled from 'styled-components';

import { ButtonElementTypes } from '../../types/buttonElementTypes';

import breakPoints from '../../breakPoints/breakPoints';

const { larger2000 } = breakPoints;

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

  &:hover {
    cursor: pointer;

    background: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'filledGreen') return '#4f896c';
      if (typeOfButton === 'filledPink') return '#B03671';
    }};

    color: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'notFilled') return '#7DB59A';
    }};

    border: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'notFilled') return '1px solid #7DB59A';
    }};
  }

  &:active,
  &:focus {
    transition: all 0s;
    cursor: pointer;

    background: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'filledGreen') return '#4F896C';
      if (typeOfButton === 'filledPink') return '#832552';
    }};
    font-weight: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'filledGreen') return '900';
    }};

    color: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'notFilled') return '#4F896C';
    }};

    border: ${(props) => {
      const { typeOfButton } = props;
      if (typeOfButton === 'notFilled') return '2px solid #4F896C';
    }};
  }

  width: ${(props) => {
    const { width } = props;
    if (width) return width;

    return 'auto';
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
    if (typeOfButton === 'filledGreen') return '#7DB59A';
    if (typeOfButton === 'filledPink') return '#E84393';

    return 'none';
  }};

  color: ${(props) => {
    const { typeOfButton } = props;
    if (typeOfButton === 'filledGreen' || typeOfButton === 'filledPink') return '#FFFFFF;';

    return '#858585';
  }};

  border: ${(props) => {
    const { typeOfButton } = props;
    if (typeOfButton === 'filledGreen' || typeOfButton === 'filledPink') return 'none';

    return '1px solid #E5E5E5;';
  }};

  @media screen and (min-width: ${larger2000}) {
    height: 80px;
  }
`;

export default ButtonElement;
