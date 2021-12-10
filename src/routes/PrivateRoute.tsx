import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import { routes } from './routes';

import { RegistrationDataTypes } from '../types/registrationDataTypes';
import { LoginDataTypes } from '../types/loginDataTypes';

const PrivateRoute: React.FC<{
  component: React.ReactType;
  jwtToken: string | null;
  currentUser: RegistrationDataTypes | LoginDataTypes | null;
  [x: string]: any;
}> = ({ component: Component, jwtToken, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!jwtToken && !currentUser) {
        swal('Для доступа к странице нужно авторизоваться!');
        return <Redirect to={routes.main} />;
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
