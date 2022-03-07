import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import DropdownField from '../../../../components/DropdownField/DropdownField';
import FormButtons from './FormButtons';

import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import actionGetCurrentClaim from '../../../../redux/actions/actionGetCurrentClaim';

import {
  getCurrentClaimState,
  getGetDataLoadingState,
  getGetDataErrorState,
  getGetDataErrorMessage,
} from '../../../../redux/selectors/selectors';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
  padding: 50px;
`;

const IncomingClaimForm: React.FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const currentClaim = useSelector(getCurrentClaimState);
  const { title, description, type, noData } = currentClaim;

  const loading = useSelector(getGetDataLoadingState);
  const error = useSelector(getGetDataErrorState);
  const errorMessage = useSelector(getGetDataErrorMessage);

  useEffect(() => {
    dispatch(actionGetCurrentClaim(id));
  }, []);

  if ((loading || noData) && !error) {
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );
  }

  if (error) return <ErrorMessage message={errorMessage} />;

  const fields = [
    {
      name: ['title'],
      value: title,
    },
    {
      name: ['type'],
      value: type?.name,
    },
    {
      name: ['description'],
      value: description,
    },
  ];

  return (
    <Container>
      <ItemForm fields={fields}>
        <InputField label="Title" name="title" rules={[{ required: false, message: 'Please input title!' }]} disabled />

        <DropdownField
          type={type?.name}
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
