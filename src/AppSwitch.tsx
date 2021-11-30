import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import TasksTablePage from './pages/TasksTablePage/TasksTablePage';

import { routes } from './routes/routes';

const AppSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routes.main}>
        <MainPage />
      </Route>
      <Route path={routes.dashboard}>
        <TasksTablePage />
      </Route>
    </Switch>
  );
};

export default AppSwitch;
