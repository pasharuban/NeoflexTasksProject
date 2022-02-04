import React, { ReactNode } from 'react';
import styled from 'styled-components';
import baseTableCardFontOnTablet from '../../../../../constants/baseTableCardFontOnTablet';

const CardContentRowContainer = styled.div`
  width: 100%;

  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContentTitle = styled.p`
  ${baseTableCardFontOnTablet()};

  color: #000000;
`;

const CardContentDescription = styled(CardContentTitle)`
  font-weight: normal;
`;

const CardContentRow: React.FC<{ title?: string; description?: string | ReactNode }> = ({ title, description }) => {
  return (
    <CardContentRowContainer>
      <CardContentTitle>{title}</CardContentTitle>
      <CardContentDescription>{description}</CardContentDescription>
    </CardContentRowContainer>
  );
};

export default CardContentRow;
