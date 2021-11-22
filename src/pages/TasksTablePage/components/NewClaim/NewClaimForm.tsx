import React from 'react';
import styled from 'styled-components';

// for typing dispatch
import { ThunkDispatch } from 'redux-thunk';

import { Form } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreateNewClaim } from '../../../../redux/actions';

import { State } from '../../../../types/stateTypes';
import { Action } from '../../../../redux/reducer';

import ItemForm from '../../../../components/ItemForm/ItemForm';
import InputField from '../../../../components/InputField/InputField';
import FormButtons from './FormButtons';
import DropdownField from '../../../../components/DropdownField/DropdownField';

const Container = styled.div`
  width: 100%;
  max-width: 589px;

  margin-top: 48px;
`;

const getSubmitFormDate = (date: Date): string => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

const NewClaimForm: React.FC<{ createNewClaim: (values: Record<string, any>) => void }> = ({ createNewClaim }) => {
  const [form] = Form.useForm();
  const onFinish = (values: Record<string, any>) => {
    form.resetFields();
    const newClaim = {
      ...values,
      createdAt: getSubmitFormDate(new Date()),
      status: {
        name: 'New',
        slug: 'new',
      },
    };
    createNewClaim(newClaim);
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

export const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchCreateNewClaim = bindActionCreators(actionCreateNewClaim, dispatch);

  return {
    createNewClaim: (newClaim: Record<string, any>) => {
      dispatchCreateNewClaim(newClaim);
    },
  };
};

export default connect(null, mapDispatchToProps)(NewClaimForm);
