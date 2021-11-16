import React from 'react';
import styled from 'styled-components';

import InputField from '../../InputField/InputField';

import IconSearch from './IconSearch';

const Container = styled.div`
  width: 100%;
  max-width: 585px;
`;

const SearchPanel: React.FC = () => {
  return (
    <Container>
      <InputField placeholder="Search" suffix={<IconSearch />} />
    </Container>
  );
};

export default SearchPanel;
