import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 3em;
  line-height: 44px;

  color: #000000;
`;

const ClaimTitle: React.FC<{ title: string }> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default ClaimTitle;
