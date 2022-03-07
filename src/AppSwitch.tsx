import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from './redux/selectors/selectors';
import MainPage from './pages/MainPage/MainPage';
import TasksTablePage from './pages/TasksTablePage/TasksTablePage';
import PrivateRoute from './routes/PrivateRoute';

import { routes } from './routes/routes';

const AppSwitch: React.FC = () => {
  const userToken = localStorage.getItem('userToken');
  const currentUser = useSelector(getCurrentUserData);

  return (
    <Switch>
      <PrivateRoute component={TasksTablePage} jwtToken={userToken} currentUser={currentUser} path={routes.dashboard} />

      <Route exact path={routes.main}>
        <MainPage />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
