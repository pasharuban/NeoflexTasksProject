import React from 'react';
import styled from 'styled-components';

import navLogo from '../../assets/TasksTablePage/img/navbar-logo.png';

const Logo = styled.img`
  margin: 32px 0 47px 0;
`;

const NavLogo: React.FC = () => {
  return <Logo src={navLogo} alt="logo" />;
};

export default NavLogo;
