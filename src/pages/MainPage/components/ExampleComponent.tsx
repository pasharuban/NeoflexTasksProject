import React from 'react';
import styled from 'styled-components/macro';
import { ExampleType } from '../../../types';

const Caption = styled.p<{ size: string }>`
  font-size: ${({ size }) => size};
  font-weight: bold;
`;

export const ExampleComponent: React.FC<ExampleType> = ({ example }) => {
  return <Caption size="36px">{example}</Caption>;
};
