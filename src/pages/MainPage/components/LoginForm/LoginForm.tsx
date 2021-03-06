import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'antd';

import { MailOutlined, LockOutlined } from '@ant-design/icons';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';

import { LoginDataTypes } from '../../../../types/loginDataTypes';
import { actionLoginUser } from '../../../../redux/actions/actionLoginUser';
import AuthError from '../../../../components/AuthError/AuthError';

import ItemForm from '../../../../components/ItemForm/ItemForm';

import InputField from '../../../../components/InputField/InputField';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

import RequestRegistration from '../RequestRegistration/RequestRegistration';

import CheckboxField from '../../../../components/CheckboxField/CheckboxField';

import { validatePassword } from '../../../../utils/HelperFunctions/helperFunctions';
import { getAuthErrorState, getAuthLoadingState } from '../../../../redux/selectors/selectors';

// styles for prefix(icon) inside input
const inputSuffixStyles = { color: '#ADADAD', fontSize: '20px' };

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoadingState);
  const loginError = useSelector(getAuthErrorState);

  let formSubmitElement = (
    <ButtonElement marginBottom="16px" typeOfButton="filledGreen" width="100%">
      Login
    </ButtonElement>
  );

  if (loading) formSubmitElement = <LoadingSpinner />;

  if (loginError) return <AuthError authTitle="Ошибка Входа!" />;

  const onFinish = (values: LoginDataTypes) => {
    dispatch(actionLoginUser(values, form));
  };

  return (
    <ItemForm onFinish={onFinish} form={form}>
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

      <CheckboxField
        name="rememberMe"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
        text="Keep me logged in"
      />

      {formSubmitElement}

      <RequestRegistration />
    </ItemForm>
  );
};

export default LoginForm;
