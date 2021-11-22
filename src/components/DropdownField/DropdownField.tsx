import React from 'react';
import styled from 'styled-components';

import { Form, Select } from 'antd';

import { DropdownFieldTypes } from '../../types/dropdownFieldTypes';
import { minWidth } from '../../mediaQueries/mediaQueries';

const { Option } = Select;

const StyledFormItem = styled(Form.Item)<{ isDisabled?: boolean }>`
  width: 100%;

  .ant-select {
    .ant-select-selector {
      background-color: inherit;
      border-radius: inherit;
      height: inherit;
      width: inherit;
      border: none;

      padding: 0 16px;
      display: flex;
      align-items: center;
    }

    .ant-select-arrow {
      color: #5c5c5c;
      width: 12px;
    }

    .ant-select-selection-placeholder {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 1.5rem;

      color: ${(props) => {
        const { isDisabled } = props;
        if (isDisabled) return '#ADADAD';

        return '#2d3436';
      }};
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

const DropdownField: React.FC<DropdownFieldTypes> = ({ label, name, rules, placeholder, allowClear, disabled }) => {
  const capitalizeFirstLetter = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  };

  return (
    <StyledFormItem label={label} name={name} rules={rules} isDisabled={!!disabled}>
      <StyledSelect placeholder={placeholder} allowClear={allowClear} disabled={disabled}>
        <Option value="hardware">{capitalizeFirstLetter('hardware')}</Option>
        <Option value="software">{capitalizeFirstLetter('software')}</Option>
        <Option value="troubleshooting">{capitalizeFirstLetter('troubleshooting')}</Option>
        <Option value="networking">{capitalizeFirstLetter('networking')}</Option>
      </StyledSelect>
    </StyledFormItem>
  );
};

export default DropdownField;
