import React from 'react';
import styled from 'styled-components';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import FormButtons from './FormButtons';
import DropdownField from '../../../../components/DropdownField/DropdownField';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const NewClaimForm: React.FC = () => {
  return (
    <Container>
      <ItemForm>
        <InputField
          label="TITLE"
          name="title"
          rules={[{ required: false, message: 'Please input title!' }]}
          placeholder="Type claim title"
        />

        <DropdownField
          label="type"
          name="type"
          rules={[{ required: false, message: 'Please select a type!' }]}
          placeholder="Select type"
          allowClear
        />

        <InputField
          label="DESCRIPTION"
          name="description"
          rules={[{ required: false, message: 'Please input description!' }]}
          placeholder="Type claim description"
        />

        <FormButtons />
      </ItemForm>
    </Container>
  );
};

export default NewClaimForm;
