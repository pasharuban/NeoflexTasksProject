import React from 'react';
import styled from 'styled-components';

import { NavIconTypes } from '../../types/navIconTypes';

const Icon = styled.img``;

const Container = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 33px;

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

const NavIcon: React.FC<NavIconTypes> = ({ src, alt, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon src={src} alt={alt} />
    </Container>
  );
};

export default NavIcon;
