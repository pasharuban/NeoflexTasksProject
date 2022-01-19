import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/MainPage/icons/sidebar-logo.svg';

import { minWidth } from '../../mediaQueries/mediaQueries';

const Logo = styled.img`
  margin: 16px 30px;

  ${minWidth.largeScreen} {
    width: 3.5%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #7db59a;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="company logo" />
    </FooterContainer>
  );
};

export default Footer;
