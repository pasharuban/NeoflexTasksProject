import React from 'react';

import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { FormInstance } from 'antd';

import { Form } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { State } from '../../../../types/stateTypes';
import { Action } from '../../../../redux/reducer';
import { registerUser } from '../../../../redux/actions/registerUser';

import { RegistrationDataTypes } from '../../../../types/registrationDataTypes';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import { actionUpdateRegistrationForm } from '../../../../redux/actions';

import ItemForm from '../../../../components/ItemForm/ItemForm';

import InputField from '../../../../components/InputField/InputField';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

import Close from '../../../../components/Close/Close';

// styles for suffix(icon) inside input
const inputSuffixStyles = { color: '#ADADAD', fontSize: '20px' };

const validatePassword = (_: string | null, value: string, callback: (arg?: string) => void) => {
  if (value.length < 5) {
    callback('less than 5 chars!');
  } else {
    callback();
  }
};

const RegistrationForm: React.FC<{
  updateRegistrationForm?: () => void;
  registerUser: (data: RegistrationDataTypes, form: FormInstance) => void;
}> = ({ updateRegistrationForm, registerUser }) => {
  const [form] = Form.useForm();
  const loading = useSelector((state: State) => state.loading);

  let formSubmitElement = (
    <ButtonElement typeOfButton="filledGreen" width="100%" marginTop="40px">
      Sign Up
    </ButtonElement>
  );

  if (loading) formSubmitElement = <LoadingSpinner />;

  const onFinish = (values: RegistrationDataTypes) => {
    registerUser(values, form);
  };

  return (
    <ItemForm onFinish={onFinish} form={form}>
      <Close onClick={updateRegistrationForm} />
      <InputField
        label="Name"
        name="fullName"
        rules={[{ required: true, message: 'Please input your name!' }]}
        placeholder="Type your name"
        type="text"
      />
      <InputField
        label="E-mail"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          { required: true, message: 'Please input your username!' },
        ]}
        placeholder="Type your e-mail"
        suffix={<MailOutlined style={inputSuffixStyles} />}
      />
      <InputField
        label="Password"
        name="password"
        rules={[
          {
            validator: validatePassword,
          },
          { required: true, message: 'Please input your password!' },
        ]}
        placeholder="Type your password"
        suffix={<LockOutlined style={inputSuffixStyles} />}
        type="password"
      />
      {formSubmitElement}
    </ItemForm>
  );
};

export const mapDispatchToProps = (dispatch: ThunkDispatch<State, never, Action>) => {
  const dispatchUpdateRegistrationForm = bindActionCreators(actionUpdateRegistrationForm, dispatch);
  const dispatchRegisterUser = bindActionCreators(registerUser, dispatch);

  return {
    updateRegistrationForm: dispatchUpdateRegistrationForm,
    registerUser: (data: RegistrationDataTypes, form: FormInstance) => {
      dispatchRegisterUser(data, form);
    },
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
