import React from 'react';
import styled from 'styled-components';

import { maxWidth } from '../../mediaQueries/mediaQueries';

import iconBurgerMenu from '../../assets/TasksTablePage/icons/burger-menu.png';

const Icon = styled.img`
  display: none;
  margin-left: 16px;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }

  ${maxWidth.tablet} {
    display: block;
  }
`;

const IconBurgerMenu: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return <Icon onClick={onClick} src={iconBurgerMenu} alt="menu" />;
};

export default IconBurgerMenu;
