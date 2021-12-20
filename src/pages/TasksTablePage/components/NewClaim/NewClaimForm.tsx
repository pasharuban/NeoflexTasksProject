import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { useDispatch } from 'react-redux';

import { Form } from 'antd';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import FormButtons from './FormButtons';
import DropdownField from '../../../../components/DropdownField/DropdownField';

import { actionCreateClaim } from '../../../../redux/actions/actionCreateClaim';

import { handleRedirectToDashboard } from '../../../../utils/HelperFunctions/helperFunctions';

// const generateUnicId = () => new Date().getTime();

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const NewClaimForm: React.FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = async (values: { title: string; description: string; type: string }) => {
    const { title, description, type } = values;
    const newClaim = {
      title,
      description,
      type,
      status: 'new',
    };

    await dispatch(actionCreateClaim(newClaim, form));
    handleRedirectToDashboard(history);
  };

  return (
    <Container>
      <ItemForm onFinish={onFinish} form={form}>
        <InputField
          label="TITLE"
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
          placeholder="Type claim title"
        />

        <DropdownField
          label="type"
          name="type"
          rules={[{ required: true, message: 'Please select a type!' }]}
          placeholder="Select type"
          allowClear
        />

        <InputField
          label="DESCRIPTION"
          name="description"
          rules={[{ required: true, message: 'Please input description!' }]}
          placeholder="Type claim description"
        />

        <FormButtons />
      </ItemForm>
    </Container>
  );
};

export default NewClaimForm;
