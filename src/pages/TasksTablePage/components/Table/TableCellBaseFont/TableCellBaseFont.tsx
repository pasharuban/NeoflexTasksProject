import React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../../../../../mediaQueries/mediaQueries';

const TableCellBaseFont = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #2d3436;
  font-size: 1.3333rem;
  line-height: 20px;

  ${maxWidth.tablet} {
    font-weight: normal;
  }
`;

export default TableCellBaseFont;
