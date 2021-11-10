import React from 'react';
import styled from 'styled-components';

import iconSearch from '../../../assets/TasksTablePage/icons/search.svg';

const Icon = styled.img``;

const IconSearch: React.FC = () => {
  return <Icon src={iconSearch} alt="bell" />;
};

export default IconSearch;
