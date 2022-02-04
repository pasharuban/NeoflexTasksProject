import React from 'react';
import styled from 'styled-components';
import ButtonElement from '../../../../../components/ButtonElement/ButtonElement';
import baseTableCardFontOnTablet from '../../../../../constants/baseTableCardFontOnTablet';
import { CellStatusField, CellStatusText, CellTypeText } from '../../../../../constants/tableColumns';
import { TableCardTypes } from '../../../../../types/tableCardTypes';
import { capitalizeFirstLetter, getEuropeFormatDate } from '../../../../../utils/HelperFunctions/helperFunctions';

import CardContentRow from '../CardContentRow/CardContentRow';

const Card = styled.div`
  width: 343px;
  max-width: 343px;
  height: 240px;

  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 24px 0;
  padding: 0 16px;

  color: black;
`;

const CardHeader = styled.div`
  width: 100%;
  padding: 6px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px 16px 0px 0px;
  background: #7db59a;
`;

const CardHeaderTitle = styled.p`
  ${baseTableCardFontOnTablet()};

  color: #ffffff;
`;

const TableRowCard: React.FC<TableCardTypes> = ({ title, createdAt, type, status, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardHeader>
        <CardHeaderTitle>{capitalizeFirstLetter(title)}</CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <CardContentRow title="Created" description={getEuropeFormatDate(new Date(createdAt))} />

        <CardContentRow
          title="Created"
          description={<CellTypeText type={type.name}>{capitalizeFirstLetter(type.name)}</CellTypeText>}
        />

        <CardContentRow
          title="Status"
          description={
            <CellStatusField status={(status as Record<string, string>).name}>
              <CellStatusText>{(status as Record<string, string>).name}</CellStatusText>
            </CellStatusField>
          }
        />

        <ButtonElement width="84px" typeOfButton="notFilled">
          Browse
        </ButtonElement>
      </CardContent>
    </Card>
  );
};

export default TableRowCard;
