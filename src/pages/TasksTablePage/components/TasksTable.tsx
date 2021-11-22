import React from 'react';
import { Table } from 'antd';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { State } from '../../../types/stateTypes';

const paginationStyles = {
  borderColor: '#7db59a',
  color: 'black',
};

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function convertDateToEurope(dateString: string) {
  const date = new Date(dateString);

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TableCellFontSize = styled.p`
  font-size: 1.3rem;
`;

const CellStatusContainer = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 144px;
  border-radius: 16px;
  padding: 9px 8px;

  background: ${(props) => {
    const { status } = props;
    switch (status) {
      case 'declined':
        return '#E84393';
      case 'new':
        return '#6C5CE7';
      case 'in progress':
        return '#FDCB6E';
      case 'done':
        return '#00B894';
      default:
        return 'black';
    }
  }};
`;

const CellStatusText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 15px;

  letter-spacing: 2.5px;
  text-transform: uppercase;

  color: #ffffff;
`;

const CellTypeText = styled(TableCellFontSize)<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 16px;

    background-color: ${(props) => {
      const { type } = props;
      switch (type.toLowerCase()) {
        case 'hardware':
          return '#7DB59A';
        case 'software':
          return '#FF7675';
        case 'networking':
          return '#FDCB6E';
        case 'troubleshooting':
          return '#6C5CE7';
        default:
          return 'black';
      }
    }};
  }
`;

const CellActionText = styled(TableCellFontSize)`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;

  text-decoration-line: underline;

  color: #148bff;
`;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: '_id',
    render: (text: string) => <TableCellFontSize>{text}</TableCellFontSize>,
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: '_id',
    render: (text: string) => <TableCellFontSize>{convertDateToEurope(text)}</TableCellFontSize>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: '_id',
    render: (text: string) => {
      return <CellTypeText type={text}>{capitalizeFirstLetter(text)}</CellTypeText>;
    },
  },
  {
    title: 'Status',
    dataIndex: ['status', 'slug'],
    key: '_id',
    render: (text: string) => {
      return (
        <CellStatusContainer status={text}>
          <CellStatusText>{text}</CellStatusText>
        </CellStatusContainer>
      );
    },
  },
  {
    title: 'Actions',
    key: '_id',
    render: () => <CellActionText>{capitalizeFirstLetter('browse')}</CellActionText>,
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
