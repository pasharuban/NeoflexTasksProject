import React from 'react';
import styled from 'styled-components';

import iconUserAvatar from '../../assets/TasksTablePage/img/user-avatar.png';

const Icon = styled.img`
  border-radius: 50%;
`;

const IconUserAvatar: React.FC = () => {
  return <Icon src={iconUserAvatar} alt="bell" />;
};

export default IconUserAvatar;
