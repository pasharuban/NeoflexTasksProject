import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { FilterValue, SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import {
  getDashboardData,
  getDashboardTotalItems,
  getGetDataErrorMessage,
  getGetDataErrorState,
  getGetDataLoadingState,
} from '../../../redux/selectors/selectors';

import { isEmpty } from '../../../utils/HelperFunctions/helperFunctions';

import actionGetClaims from '../../../redux/actions/actionGetClaims';
import columns from '../../../constants/tableColumns';
import sortOrders from '../../../constants/sortOrders';

const paginationStyles = {
  borderColor: '#7db59a',
  color: 'black',
};

const StyledTable = styled(Table)`
  width: 100%;

  align-self: center;

  margin-top: 50px;

  .ant-table-column-sorters {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
  }

  .ant-table-column-title,
  .ant-table-cell {
    margin-right: 16px;
    font-size: 18px;
  }

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

const TasksTable: React.FC = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(getDashboardData);
  const totalItems = useSelector(getDashboardTotalItems);

  const loading = useSelector(getGetDataLoadingState);
  const error = useSelector(getGetDataErrorState);
  const errorMessage = useSelector(getGetDataErrorMessage);

  const [current, setCurrent] = useState(1);
  const [currentOrder, setCurrentOrder] = useState('');

  type tableDataType = typeof tableData[0];

  const limit = 5;

  let locale = {};

  const jumpToFirstPage = (limit: number, offset: number, field: string, order: string) => {
    setCurrent(1);
    dispatch(actionGetClaims(limit, offset, field, order));
  };

  const triggerPaginateOrSort = (pagination: Record<string, any>, sorter: Record<string, any>) => {
    const offset = pagination.current * limit - limit;

    let field = '';
    let order = '';

    if (!isEmpty(sorter)) {
      if (Array.isArray(sorter.field)) [field] = sorter.field;
      else field = sorter.field;

      // при нажатии на иконку сортировки у нас может быть 3 состояния
      // (asc,desc  и сброс) поэтому отслеживаю order (при сбросе order = undefined)
      // sorter  возращает нужный order c 'end' (ascend,descend) а нам нужно (desc,asc)
      // if (sorter.order) order = sorter.order.replace('end', '');

      order = sortOrders[sorter?.order];

      if (pagination.current > 1 && currentOrder !== sorter.order) {
        jumpToFirstPage(limit, 0, field, order);
        setCurrentOrder(sorter.order);
        return 0;
      }

      setCurrentOrder(sorter.order);
    }

    dispatch(actionGetClaims(limit, offset, field, order));
  };

  const handleTableOnChange = (
    pagination: TablePaginationConfig,
    _: Record<string, FilterValue | null>,
    sorter: SorterResult<tableDataType> | SorterResult<tableDataType>[],
    extra: TableCurrentDataSource<tableDataType>,
  ) => {
    if (extra.action === 'paginate' || extra.action === 'sort') {
      triggerPaginateOrSort(pagination, sorter);
    }
  };

  const handlePaginationOnChange = (page: number) => {
    setCurrent(page);
  };

  if (error) {
    locale = {
      emptyText: <span style={{ color: 'red', fontFamily: 'Inter' }}>{errorMessage}</span>,
    };
  }

  useEffect(() => {
    dispatch(actionGetClaims(limit));
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
      pagination={{
        defaultPageSize: limit,
        defaultCurrent: 1,
        current,
        total: totalItems,
        showSizeChanger: false,
        onChange: handlePaginationOnChange,
      }}
      onChange={handleTableOnChange}
    />
  );
};

export default TasksTable;
