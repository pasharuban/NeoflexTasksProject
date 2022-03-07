import React from 'react';
import styled from 'styled-components';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchPanel from './SearchPanel/SearchPanel';
import CurrentUser from './CurrentUser/CurrentUser';

import IconBell from './IconBell';
import IconLogOut from './IconLogOut';
import { maxWidth } from '../../mediaQueries/mediaQueries';

const HeaderContainer = styled.div`
  height: 96px;
  min-height: 96px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-bottom: 1px solid #c2c2c2;

  ${maxWidth.tablet} {
    height: 64px;
    background-color: #7db59a;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BurgerMenu />
      <SearchPanel />
      <IconBell />
      <CurrentUser />
      <IconLogOut />
    </HeaderContainer>
  );
};

export default Header;
