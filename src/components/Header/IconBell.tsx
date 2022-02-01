import React from 'react';
import styled from 'styled-components';

import iconBell from '../../assets/TasksTablePage/icons/bell.svg';
import { makeIconWhiteOnTablet } from '../../utils/HelperFunctions/helperFunctions';

const Icon = styled.img`
  margin-left: 73px;

  &:hover {
    cursor: pointer;
  }

  ${makeIconWhiteOnTablet()}
`;

const IconBell: React.FC = () => {
  return <Icon src={iconBell} alt="bell" />;
};

export default IconBell;
