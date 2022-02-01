import React from 'react';
import styled from 'styled-components';

import { useHistory, useRouteMatch } from 'react-router';

import TableCellBaseFont from './TableCellBaseFont';

import { capitalizeFirstLetter } from '../../../utils/HelperFunctions/helperFunctions';

const CellActionText = styled(TableCellBaseFont)`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;

  text-decoration-line: underline;

  color: #148bff;

  &:hover {
    cursor: pointer;
  }
`;

const ActionCell: React.FC<{
  index: Record<string, any>;
}> = ({ index }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CellActionText
      onClick={() => {
        history.push(`${url}/${index._id}`);
      }}
    >
      {capitalizeFirstLetter('browse')}
    </CellActionText>
  );
};

export default ActionCell;
