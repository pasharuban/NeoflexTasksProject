import React from 'react';
import styled from 'styled-components/macro';

import image from '../../../../assets/MainPage/img/illustration-main-page.png';

const IllustrationImage = styled.img`
  width: 100%;
  max-width: 699px;
`;

const Illustration: React.FC = () => {
  return <IllustrationImage src={image} alt="create your task" />;
};

export default Illustration;
