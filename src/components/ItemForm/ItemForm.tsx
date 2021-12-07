import React from 'react';
import styled from 'styled-components';

import { Form } from 'antd';

import { ItemFormTypes } from '../../types/itemFormTypes';

// customizing antd Form styles
const StyledForm = styled(Form)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & label {
    margin: 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 1rem;
    line-height: 15px;

    letter-spacing: 2.5px;
    text-transform: uppercase;

    color: #adadad;

    &::before {
      display: none !important;
    }
  }

  & .ant-form-item:last-of-type {
    margin: 0;
  }
`;

const ItemForm: React.FC<ItemFormTypes> = ({ children, onFinish, form, initialValues }) => {
  return (
    <StyledForm
      form={form}
      className="item-form"
      name="basic"
      labelCol={{ span: 24 }}
      initialValues={initialValues}
      autoComplete="off"
      onFinish={(values) => onFinish(values)}
    >
      {children}
    </StyledForm>
  );
};

export default ItemForm;
