import React from 'react';
import styled from 'styled-components';

import iconLogOut from '../../assets/TasksTablePage/icons/log-out.svg';

const Icon = styled.img`
  margin-right: 35px;
  width: 40px;
`;

const IconLogOut: React.FC = () => {
  return <Icon src={iconLogOut} alt="bell" />;
};

export default IconLogOut;
