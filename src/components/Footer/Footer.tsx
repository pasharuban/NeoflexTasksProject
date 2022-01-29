import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/MainPage/icons/sidebar-logo.svg';

import { maxWidth, minWidth } from '../../mediaQueries/mediaQueries';

const Logo = styled.img`
  margin-left: 40px;
  &:hover {
    cursor: pointer;
  }

  ${minWidth.largeScreen} {
    width: 3.5%;
  }

  ${maxWidth.tablet} {
    display: none;
  }
`;

const FooterContainer = styled.div`
  height: 91px;
  width: 100%;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #7db59a;

  ${maxWidth.tablet} {
    height: 64px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="company logo" />
    </FooterContainer>
  );
};

export default Footer;
