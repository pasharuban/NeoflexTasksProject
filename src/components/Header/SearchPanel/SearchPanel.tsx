import React from 'react';
import styled from 'styled-components';
import { hideElementOnTablet } from '../../../utils/HelperFunctions/helperFunctions';

import InputField from '../../InputField/InputField';

import IconSearch from './IconSearch';

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 585px;

  ${hideElementOnTablet()};
`;

const SearchPanel: React.FC = () => {
  return (
    <Container>
      <InputField placeholder="Search" suffix={<IconSearch />} paddingLeft="26px" paddingRight="4px" />
    </Container>
  );
};

export default SearchPanel;
