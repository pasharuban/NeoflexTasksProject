import React from 'react';
import { Table } from 'antd';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { State } from '../../../types/stateTypes';

const paginationStyles = {
  borderColor: '#7db59a',
  color: 'black',
};

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: 'created',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status.name',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <a>browse</a>,
  },
];

const StyledTable = styled(Table)`
  width: 100%;

  align-self: center;

  margin-top: 50px;

  .ant-pagination-item {
    color: ${paginationStyles.color};
    & a {
      color: inherit;
    }

    &:hover {
      border-color: ${paginationStyles.borderColor};
      color: inherit;
    }
  }

  .ant-pagination-item-active {
    border-color: ${paginationStyles.borderColor};
  }

  .ant-pagination-item-link {
    &:hover {
      border-color: ${paginationStyles.borderColor};
      color: ${paginationStyles.color};
    }
  }
`;

const TasksTable: React.FC<{ claims?: any[] }> = ({ claims }) => {
  return <StyledTable dataSource={claims} columns={columns} />;
};

const mapStateToProps = (state: State) => {
  return { claims: state.claims };
};

export default connect(mapStateToProps, null)(TasksTable);
