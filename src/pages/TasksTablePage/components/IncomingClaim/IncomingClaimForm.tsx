import React, { useCallback } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router';

import { RootState } from '../../../../redux/rootReducer';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import DropdownField from '../../../../components/DropdownField/DropdownField';
import FormButtons from './FormButtons';

import { capitalizeFirstLetter } from '../../../../utils/HelperFunctions/helperFunctions';

import { actionUpdateCurrentTableElement } from '../../../../redux/actionCreators';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const selectTableElement = (id: string, state: RootState) => state.forms.claims.find((claim) => claim._id === id);

const selectAndSetTableElement = (
  id: string,
  state: RootState,
  updateCurrentTableElement: (currentTableElement: Record<string, unknown>) => void,
) => {
  const tableElement = selectTableElement(id, state);
  if (tableElement) {
    updateCurrentTableElement(tableElement);
    return tableElement;
  }

  return {
    noData: true,
    title: 'NO DATA',
    description: 'NO DATA',
    type: 'NO DATA',
  };
};

const IncomingClaimForm: React.FC = () => {
  const dispatch = useDispatch();
  const updateCurrentTableElement = useCallback(
    (currentTableElement: Record<string, unknown>) => dispatch(actionUpdateCurrentTableElement(currentTableElement)),
    [dispatch],
  );

  const getTableElement = useSelector((state: RootState) => {
    return (id: string) => {
      return state.forms.currentTableElement._id
        ? state.forms.currentTableElement
        : selectAndSetTableElement(id, state, updateCurrentTableElement);
    };
  });

  const { id } = useParams<{ id: string }>();

  const tableElement = getTableElement(id);

  const initialValues = {
    remember: true,
    title: capitalizeFirstLetter(tableElement.title),
    description: capitalizeFirstLetter(tableElement.description),
    type: capitalizeFirstLetter(tableElement.type),
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

export default IncomingClaimForm;
