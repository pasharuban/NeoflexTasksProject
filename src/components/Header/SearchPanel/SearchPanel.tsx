import React from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { hideElementOnTablet } from '../../../utils/HelperFunctions/helperFunctions';

import InputField from '../../InputField/InputField';

import IconSearch from './IconSearch';

import actionSearchClaims from '../../../redux/actions/actionSearchClaims';

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 585px;

  ${hideElementOnTablet()};
`;

const SearchPanel: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <InputField
        onChange={(e) => {
          dispatch(actionSearchClaims(e.target.value));
        }}
        placeholder="Search"
        suffix={<IconSearch />}
        paddingLeft="26px"
        paddingRight="4px"
      />
    </Container>
  );
};

export default SearchPanel;
