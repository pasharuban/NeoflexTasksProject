import React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../../../../../mediaQueries/mediaQueries';

const Title = styled.p`
  margin-left: 8px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 44px;

  color: #000000;

  ${maxWidth.tablet} {
    font-size: 2rem;
    margin-left: 0;
  }
`;

const TableTitle: React.FC<{ title: string }> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TableTitle;
