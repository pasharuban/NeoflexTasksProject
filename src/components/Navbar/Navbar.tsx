import React from 'react';
import styled from 'styled-components';

import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';

const NavbarContainer = styled.div`
  width: 96px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  background: linear-gradient(180deg, #d5eee2 0%, #7db59a 43.23%);
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavLogo />
      <NavigationMenu />
    </NavbarContainer>
  );
};

export default Navbar;
