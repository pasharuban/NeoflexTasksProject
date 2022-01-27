import React from 'react';
import styled from 'styled-components';

import ActionCell from '../pages/TasksTablePage/components/ActionCell';
import TableCellBaseFontSize from '../pages/TasksTablePage/components/TableCellBaseFontSize';
import { tableTypeBeforeElementBackgroundColor } from '../utils/Colors/tableTypeElement';
import { capitalizeFirstLetter, getEuropeFormatDate } from '../utils/HelperFunctions/helperFunctions';

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

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: '_id',
    render: (text: string) => <TableCellBaseFontSize>{text}</TableCellBaseFontSize>,
    sorter: true,
  },
  {
    title: 'Created',
    dataIndex: 'createdAt',
    key: '_id',
    render: (text: string) => <TableCellBaseFontSize>{getEuropeFormatDate(new Date(text))}</TableCellBaseFontSize>,
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
