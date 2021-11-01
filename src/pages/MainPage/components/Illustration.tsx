import React from 'react';
import styled from 'styled-components/macro';

import image from '../../../assets/img/illustration-main-page.png';

const IllustrationImage = styled.img``;

export const Illustration: React.FC = () => {
  return <IllustrationImage src={image} alt="create your task" />;
};
