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

const NewClaimTitle: React.FC = () => {
  return <Title>Creating new claim</Title>;
};

export default NewClaimTitle;
