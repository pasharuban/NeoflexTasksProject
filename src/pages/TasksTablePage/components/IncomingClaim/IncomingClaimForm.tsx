import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import DropdownField from '../../../../components/DropdownField/DropdownField';
import FormButtons from './FormButtons';

import { State } from '../../../../types/stateTypes';

const capitalizeFirstLetter = (option: string) => {
  return option.charAt(0).toUpperCase() + option.slice(1);
};

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;
const IncomingClaimForm: React.FC<Partial<ReturnType<typeof mapStateToProps>>> = ({ tableElement }) => {
  return (
    <Container>
      <ItemForm>
        <InputField
          label="Title"
          name="title"
          rules={[{ required: false, message: 'Please input title!' }]}
          placeholder={capitalizeFirstLetter(tableElement?.title)}
          disabled
        />

        <DropdownField
          type={tableElement?.type}
          label="type"
          name="type"
          rules={[{ required: false, message: 'Please select a type!' }]}
          placeholder={capitalizeFirstLetter(tableElement?.type)}
          allowClear
          disabled
        />

        <InputField
          label="DESCRIPTION"
          name="description"
          rules={[{ required: false, message: 'Please input description!' }]}
          placeholder={capitalizeFirstLetter(tableElement?.description)}
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
