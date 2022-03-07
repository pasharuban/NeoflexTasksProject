import React, { useState } from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'burger-menu';

import 'burger-menu/lib/index.css';

import NavigationMenu from '../Navbar/NavigationMenu';

import IconBurgerMenu from './IconBurgerMenu';
import IconCloseMenu from './IconCloseMenu';

const StyledMenu = styled(Menu)`
  background-color: #7db59a;

  .menu {
    background-color: inherit;
    padding: 0;
  }
`;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconBurgerMenu onClick={() => setIsOpen(!isOpen)} />
      <StyledMenu
        customCrossIcon={<IconCloseMenu />}
        left
        className="burger-menu"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <NavigationMenu horizontalAligment="flex-start" marginLeft="16px" />
      </StyledMenu>{' '}
    </>
  );
};

export default BurgerMenu;
