import React from 'react';
import { Table } from 'antd';

import styled from 'styled-components';

import Data from '../../../redux/Data';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];

const StyledTable = styled(Table)`
  width: 93.96%;

  align-self: center;

  margin-top: 100px;
`;

const TasksTable: React.FC = () => {
  return <StyledTable dataSource={Data} columns={columns} />;
};

export default TasksTable;
