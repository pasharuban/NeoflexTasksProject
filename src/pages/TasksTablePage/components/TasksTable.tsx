import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import actionGetClaims from '../../../redux/actions/actionGetClaims';

import {
  getDashboardData,
  getGetDataErrorMessage,
  getGetDataErrorState,
  getGetDataLoadingState,
} from '../../../redux/selectors/selectors';

import TableCellBaseFontSize from './TableCellBaseFontSize';
import ActionCell from './ActionCell';

import { capitalizeFirstLetter } from '../../../utils/HelperFunctions/helperFunctions';
import { tableTypeBeforeElementBackgroundColor } from '../../../utils/Colors/tableTypeElement';
import { getEuropeFormatDate } from '../../../utils/HelperFunctions/helperFunctions';

const paginationStyles = {
  borderColor: '#7db59a',
  color: 'black',
};

const CellStatusField = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 144px;
  border-radius: 16px;
  padding: 9px 8px;

  background: ${(props) => {
    const { status } = props;
    switch (status.toLowerCase()) {
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

const CellTypeText = styled(TableCellBaseFontSize)<{ type: string }>`
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

    background-color: ${(props) => tableTypeBeforeElementBackgroundColor(props.type)};
  }
`;

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

const Spinner = <LoadingOutlined style={{ fontSize: 34, color: '#7db59a' }} spin />;

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: '_id',
    render: (text: string) => <TableCellBaseFontSize>{text}</TableCellBaseFontSize>,
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: '_id',
    render: (text: string) => <TableCellBaseFontSize>{getEuropeFormatDate(new Date(text))}</TableCellBaseFontSize>,
  },
  {
    title: 'Type',
    dataIndex: ['type', 'name'],
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
        <CellStatusField status={text}>
          <CellStatusText>{text}</CellStatusText>
        </CellStatusField>
      );
    },
  },
  {
    title: 'Actions',
    key: '_id',
    render: (index: Record<string, unknown>) => <ActionCell index={index} />,
  },
];

const TasksTable: React.FC = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(getDashboardData);
  const loading = useSelector(getGetDataLoadingState);
  const error = useSelector(getGetDataErrorState);
  const errorMessage = useSelector(getGetDataErrorMessage);

  let locale = {};

  if (error) {
    locale = {
      emptyText: <span style={{ color: 'red', fontFamily: 'Inter' }}>{errorMessage}</span>,
    };
  }

  useEffect(() => {
    dispatch(actionGetClaims());
  }, []);

  return (
    <StyledTable
      locale={locale}
      loading={{
        indicator: <Spin indicator={Spinner} />,
        spinning: loading,
      }}
      rowKey="_id"
      dataSource={tableData}
      columns={columns}
    />
  );
};

export default TasksTable;
