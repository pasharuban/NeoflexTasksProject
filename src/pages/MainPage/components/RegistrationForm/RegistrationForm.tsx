import React from 'react';

import { connect, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FormInstance } from 'antd';

import { Form } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

import { actionRegisterUser } from '../../../../redux/actions/actionRegisterUser';
import { validatePassword } from '../../../../utils/HelperFunctions/helperFunctions';

import AuthError from '../../../../components/AuthError/AuthError';

import { RegistrationDataTypes } from '../../../../types/registrationDataTypes';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import { actionUpdateRegistrationForm } from '../../../../redux/actions/actionCreators';

import ItemForm from '../../../../components/ItemForm/ItemForm';

import InputField from '../../../../components/InputField/InputField';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

import { getAuthErrorState, getAuthLoadingState } from '../../../../redux/selectors/selectors';

import Close from '../../../../components/Close/Close';
import { ActionTypeTypes } from '../../../../types/actionTypeTypes';

// styles for suffix(icon) inside input
const inputSuffixStyles = { color: '#ADADAD', fontSize: '20px' };

const RegistrationForm: React.FC<{
  updateRegistrationForm?: () => void;
  registerUser: (data: RegistrationDataTypes, form: FormInstance) => void;
}> = ({ updateRegistrationForm, registerUser }) => {
  const [form] = Form.useForm();
  const loading = useSelector(getAuthLoadingState);
  const registrationError = useSelector(getAuthErrorState);

  let formSubmitElement = (
    <ButtonElement typeOfButton="filledGreen" width="100%" marginTop="40px">
      Sign Up
    </ButtonElement>
  );

  if (loading) formSubmitElement = <LoadingSpinner />;

  if (registrationError) return <AuthError authTitle="Ошибка Регистрации" />;

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
        suffix={<UserOutlined style={inputSuffixStyles} />}
      />
      <InputField
        label="E-mail"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          { required: true, message: 'Please input your email!' },
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

export const mapDispatchToProps = (dispatch: Dispatch<ActionTypeTypes>) => {
  const dispatchUpdateRegistrationForm = bindActionCreators(actionUpdateRegistrationForm, dispatch);
  const dispatchRegisterUser = bindActionCreators(actionRegisterUser, dispatch);

  return {
    updateRegistrationForm: dispatchUpdateRegistrationForm,
    registerUser: (data: RegistrationDataTypes, form: FormInstance) => {
      dispatchRegisterUser(data, form);
    },
  };
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
