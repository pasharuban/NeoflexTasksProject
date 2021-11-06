import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/img/sidebar-logo.svg';

import breakPoints from '../../breakPoints/breakPoints';

const { larger2000 } = breakPoints;

const Logo = styled.img`
  margin: 16px 30px;

  @media screen and (min-width: ${larger2000}) {
    width: 3.5%;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #7db59a;
  width: 100%;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="company logo" />
    </FooterContainer>
  );
};
