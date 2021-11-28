import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import DropdownField from '../../../../components/DropdownField/DropdownField';
import FormButtons from './FormButtons';

import { State } from '../../../../types/stateTypes';

import { capitalizeFirstLetter } from '../../../../utils/HelperFunctions/helperFunctions';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;
const IncomingClaimForm: React.FC<Partial<ReturnType<typeof mapStateToProps>>> = ({ tableElement }) => {
  const initialValues = {
    remember: true,
    title: capitalizeFirstLetter(tableElement?.title),
    description: capitalizeFirstLetter(tableElement?.description),
    type: capitalizeFirstLetter(tableElement?.type),
  };

  return (
    <Container>
      <ItemForm initialValues={initialValues}>
        <InputField label="Title" name="title" rules={[{ required: false, message: 'Please input title!' }]} disabled />

        <DropdownField
          type={tableElement?.type}
          label="type"
          name="type"
          rules={[{ required: false, message: 'Please select a type!' }]}
          allowClear
          disabled
        />

        <InputField
          label="DESCRIPTION"
          name="description"
          rules={[{ required: false, message: 'Please input description!' }]}
          disabled
        />
        <FormButtons />
      </ItemForm>
    </Container>
  );
};

const mapStateToProps = (state: State) => {
  return {
    tableElement: state.currentTableElement,
  };
};

export default connect(mapStateToProps, null)(IncomingClaimForm);
