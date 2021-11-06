import React from 'react';
import styled from 'styled-components/macro';

import image from '../../../assets/img/illustration-main-page.png';

const IllustrationImage = styled.img`
  width: 100%;
  max-width: 200%;
  min-width: 450px;

  @media screen and (max-width: 1680px) {
    max-width: 700px;
  }
`;

export const Illustration: React.FC = () => {
  return <IllustrationImage src={image} alt="create your task" />;
};
