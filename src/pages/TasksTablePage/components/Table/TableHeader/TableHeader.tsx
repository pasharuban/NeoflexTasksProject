import React from 'react';
import styled from 'styled-components';

import CreateButton from './CreateButton';
import TableTitle from './TableTitle';

const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TableHeader: React.FC = () => {
  return (
    <Header>
      <TableTitle title="Your claims" />
      <CreateButton />
    </Header>
  );
};

export default TableHeader;
