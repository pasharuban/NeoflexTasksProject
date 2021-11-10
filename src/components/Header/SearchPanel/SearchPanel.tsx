import React from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

import IconSearch from './IconSearch';

const suffix = <IconSearch />;

const StyledSearchInput = styled(Input)`
  width: 100%;
  max-width: 585px;
  height: 48px;

  background: rgba(194, 194, 194, 0.24);
  border-radius: 16px;

  & input {
    background: rgba(194, 194, 194, 0);
    border-radius: inherit;

    &::placeholder {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5em;
      line-height: 2.66em;
      z-index: 11111;

      color: #adadad;
    }
  }
`;

const SearchPanel: React.FC = () => {
  return <StyledSearchInput placeholder="Search" suffix={suffix} />;
};

export default SearchPanel;
