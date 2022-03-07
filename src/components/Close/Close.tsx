import React from 'react';
import styled from 'styled-components';

import iconCross from '../../assets/MainPage/icons/close-form-icon_32.png';

const CloseFormLogo = styled.img`
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Close: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return <CloseFormLogo onClick={onClick} src={iconCross} alt="close" />;
};

export default Close;
