import React from 'react';
import styled from 'styled-components';

import ActionCell from '../pages/TasksTablePage/components/Table/ActionCell/ActionCell';
import TableCellBaseFont from '../pages/TasksTablePage/components/Table/TableCellBaseFont/TableCellBaseFont';

import { tableTypeBeforeElementBackgroundColor } from '../utils/Colors/tableTypeElement';
import { capitalizeFirstLetter, getEuropeFormatDate } from '../utils/HelperFunctions/helperFunctions';
import { maxWidth } from '../mediaQueries/mediaQueries';

export const CellStatusField = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 32px;
  border-radius: 16px;

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

  ${maxWidth.tablet} {
    width: 93px;
    height: 24px;
  }
`;

export const CellStatusText = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 15px;

  letter-spacing: 2.5px;
  text-transform: uppercase;

  color: #ffffff;

  ${maxWidth.tablet} {
    font-size: 0.667rem;
  }
`;

export const CellTypeText = styled(TableCellBaseFont)<{ type: string }>`
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

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: '_id',
    render: (text: string) => <TableCellBaseFont>{text}</TableCellBaseFont>,
    sorter: true,
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: '_id',
    render: (text: string) => <TableCellBaseFont>{getEuropeFormatDate(new Date(text))}</TableCellBaseFont>,
    sorter: true,
  },
  {
    title: 'Type',
    dataIndex: ['type', 'name'],
    key: '_id',
    render: (text: string) => {
      return <CellTypeText type={text}>{capitalizeFirstLetter(text)}</CellTypeText>;
    },
    sorter: true,
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
    sorter: true,
  },
  {
    title: 'Actions',
    key: '_id',
    render: (index: Record<string, unknown>) => <ActionCell index={index} />,
  },
];

export default columns;
