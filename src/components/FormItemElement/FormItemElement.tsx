import React from 'react';
import styled from 'styled-components';

import { Form } from 'antd';

import { FormItemElementTypes } from '../../types/formItemElementTypes';

// customizing antd FormItem styles
const StyledFormItem = styled(Form.Item)`
  width: 100%;
`;

const FormItemElement: React.FC<FormItemElementTypes> = ({ label, name, rules, children }) => {
  return (
    <StyledFormItem label={label} name={name} rules={rules}>
      {children}
    </StyledFormItem>
  );
};

export default FormItemElement;
