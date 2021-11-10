import React from 'react';
import styled from 'styled-components';

import iconBell from '../../assets/TasksTablePage/icons/bell.svg';

const Icon = styled.img`
  margin-left: 74px;
`;

const IconBell: React.FC = () => {
  return <Icon src={iconBell} alt="bell" />;
};

export default IconBell;
