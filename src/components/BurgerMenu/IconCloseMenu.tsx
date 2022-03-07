import React from 'react';
import styled from 'styled-components';

import closeMenu from '../../assets/TasksTablePage/icons/close-menu.png';

const CloseMenu = styled.img``;

const IconCloseMenu = () => {
  return <CloseMenu src={closeMenu} alt="close" />;
};

export default IconCloseMenu;
