import React from 'react';
import styled from 'styled-components';

import SearchPanel from './SearchPanel/SearchPanel';
import CurrentUser from './CurrentUser/CurrentUser';

import IconBell from './IconBell';
import IconLogOut from './IconLogOut';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-bottom: 1px solid #c2c2c2;

  padding: 1.3% 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchPanel />
      <IconBell />
      <CurrentUser />
      <IconLogOut />
    </HeaderContainer>
  );
};

export default Header;
