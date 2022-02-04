import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styled from 'styled-components';

import { Pagination } from 'antd';

import TableRowCard from '../TableRowCard/TableRowCard';

import { ClaimTypes } from '../../../../../types/claimTypes';

import { setPaginationStyles } from '../../../../../constants/pagination';
import actionGetClaims from '../../../../../redux/actions/actionGetClaims';
import { getGetDataLoadingState } from '../../../../../redux/selectors/selectors';
import LoadingSpinner from '../../../../../components/LoadingSpinner/LoadingSpinner';

const TableOnTabletContainer = styled.div`
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${setPaginationStyles()};
`;

const TableOnTablet: React.FC<{ tableData: ClaimTypes[]; totalItems: number; limit: number }> = ({
  tableData,
  totalItems,
  limit,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector(getGetDataLoadingState);

  const history = useHistory();
  const { url } = useRouteMatch();

  if (loading) return <LoadingSpinner />;

  return (
    <TableOnTabletContainer>
      {tableData.map((tableElement) => {
        const { title, createdAt, status, type, _id } = tableElement;

        return (
          <TableRowCard
            title={title as string}
            createdAt={createdAt as string}
            status={status as Record<string, string>}
            type={type as Record<string, string>}
            key={_id}
            onClick={() => {
              history.push(`${url}/${_id}`);
            }}
          />
        );
      })}
      <Pagination
        onChange={(page) => {
          const offset = page * limit - limit;
          dispatch(actionGetClaims(limit, offset));
        }}
        defaultCurrent={1}
        total={totalItems}
        defaultPageSize={limit}
        showSizeChanger={false}
      />
    </TableOnTabletContainer>
  );
};

export default TableOnTablet;
