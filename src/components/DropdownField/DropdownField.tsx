import React from 'react';
import styled from 'styled-components';

import { Form, Select } from 'antd';

import { DropdownFieldTypes } from '../../types/dropdownFieldTypes';
import { minWidth } from '../../mediaQueries/mediaQueries';

import { capitalizeFirstLetter } from '../../utils/HelperFunctions/helperFunctions';
import { tableTypeBeforeElementBackgroundColor } from '../../utils/Colors/tableTypeElement';

const { Option } = Select;

const StyledFormItem = styled(Form.Item)<{ $isDisabled?: boolean; type?: string }>`
  width: 100%;

  .ant-select {
    font-size: 1.5rem;

    .ant-select-selector {
      background-color: inherit;
      border-radius: inherit;
      height: inherit;
      width: inherit;
      border: none;

      padding: 0 16px;
      display: flex;
      align-items: center;

      &::before {
        content: ${(props) => (props.type ? `''` : ``)};
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 16px;

        background-color: ${(props) => tableTypeBeforeElementBackgroundColor(props.type)};
      }
    }

    .ant-select-arrow {
      color: #5c5c5c;
      width: 12px;
    }

    .ant-select-selection-placeholder {
      display: flex;
      align-items: center;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;

      color: #2d3436;
    }
  }
`;

const StyledSelect = styled(Select)`
  height: 48px;
  border-radius: 16px;
  border: none;
  background: #f0f0f0;

  margin: 0;
  ${minWidth.largeScreen} {
    height: 80px;
  }
`;

const DropdownField: React.FC<DropdownFieldTypes> = ({
  label,
  name,
  rules,
  placeholder,
  allowClear,
  disabled,
  type,
}) => {
  return (
    <StyledFormItem label={label} name={name} rules={rules} $isDisabled={!!disabled} type={type}>
      <StyledSelect placeholder={placeholder} allowClear={allowClear} disabled={disabled}>
        <Option value="hard">{capitalizeFirstLetter('hardware')}</Option>
        <Option value="soft">{capitalizeFirstLetter('software')}</Option>
        <Option value="troublesh">{capitalizeFirstLetter('troubleshooting')}</Option>
        <Option value="net">{capitalizeFirstLetter('networking')}</Option>
      </StyledSelect>
    </StyledFormItem>
  );
};

export default DropdownField;
