import React from 'react';
import styled from 'styled-components';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import DropdownField from '../../../../components/DropdownField/DropdownField';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const StyledInputField = styled(InputField)``;

const IncomingClaimForm: React.FC = () => {
  return (
    <Container>
      <ItemForm>
        <StyledInputField
          label="TITLE"
          name="title"
          rules={[{ required: false, message: 'Please input title!' }]}
          placeholder="Figma smart web system for to build"
          disabled
        />

        <DropdownField
          label="type"
          name="type"
          rules={[{ required: false, message: 'Please select a type!' }]}
          placeholder="Hardware"
          allowClear
          disabled
        />

        <InputField
          label="DESCRIPTION"
          name="description"
          rules={[{ required: false, message: 'Please input description!' }]}
          placeholder="Some claim description here"
          disabled
        />
      </ItemForm>
    </Container>
  );
};

export default IncomingClaimForm;
