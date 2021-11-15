import React from 'react';
import styled from 'styled-components';

import { Form } from 'antd';

// customizing antd Form styles
const StyledForm = styled(Form)`
  width: 100%;
  min-width: 466px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  }

  & .ant-form-item:last-of-type {
    margin: 0;
  }
`;

const ItemForm: React.FC = ({ children }) => {
  return (
    <StyledForm
      className="item-form"
      name="basic"
      labelCol={{ span: 24 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      {children}
    </StyledForm>
  );
};

export default ItemForm;
