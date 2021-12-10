import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from './pages/MainPage/MainPage';
import TasksTablePage from './pages/TasksTablePage/TasksTablePage';
import PrivateRoute from './routes/PrivateRoute';

import { State } from './types/stateTypes';

import { routes } from './routes/routes';

const AppSwitch: React.FC = () => {
  const userToken = localStorage.getItem('userToken');
  const currentUser = useSelector((state: State) => state.userData);

  return (
    <Switch>
      <PrivateRoute component={TasksTablePage} jwtToken={userToken} currentUser={currentUser} path={routes.dashboard} />

      <Route
        exact
        path={routes.main}
        render={() => {
          if (localStorage.getItem('userToken') || currentUser) return <Redirect to={routes.dashboard} />;
          
          return <MainPage />;
        }}
      />
    </Switch>
  );
};

export default AppSwitch;
