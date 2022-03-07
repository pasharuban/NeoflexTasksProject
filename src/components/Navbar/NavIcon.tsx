import React from 'react';
import styled from 'styled-components';

import { NavIconTypes } from '../../types/navIconTypes';

import { maxWidth } from '../../mediaQueries/mediaQueries';

import { menuHorizontalAligment, iconMarginLeft } from '../../utils/Markup/menu';

const Icon = styled.img<{ marginLeft?: string }>`
  margin-left: ${(props) => iconMarginLeft(props.marginLeft)};
`;

const Container = styled.div<{ horizontalAligment?: string }>`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: ${(props) => menuHorizontalAligment(props.horizontalAligment)};
  align-items: center;

  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      float: left;

      position: absolute;
      top: 0;
      left: 0;

      width: 5px;
      height: 40px;
      background-color: #ffffff;

      animation: fadein 1s;
    }
  }
`;

const IconLabel = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff !important;
  margin-left: 24px;

  display: none;
  ${maxWidth.tablet} {
    display: block;
  }
`;

const NavIcon: React.FC<NavIconTypes> = ({ src, alt, onClick, label, horizontalAligment, marginLeft }) => {
  return (
    <Container onClick={onClick} horizontalAligment={horizontalAligment}>
      <Icon src={src} alt={alt} marginLeft={marginLeft} />
      <IconLabel>{label}</IconLabel>
    </Container>
  );
};

export default NavIcon;
