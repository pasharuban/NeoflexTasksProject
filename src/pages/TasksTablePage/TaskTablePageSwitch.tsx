import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import NewClaim from './components/NewClaim/NewClaim';
import IncomingClaim from './components/IncomingClaim/IncomingClaim';
import TasksTable from './components/Table/TasksTable/TasksTable';
import TableHeader from './components/Table/TableHeader/TableHeader';

import { routes } from '../../routes/routes';

const TableElement: React.FC = () => {
  return (
    <>
      <TableHeader />
      <TasksTable />
    </>
  );
};

const TasksTablePageSwitch: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={routes.dashboard}>
        <TableElement />
      </Route>
      <Route path={`${url}${routes.create}`}>
        <NewClaim />
      </Route>
      <Route path={`${url}${routes.edit}`}>
        <IncomingClaim />
      </Route>
    </Switch>
  );
};
export default TasksTablePageSwitch;
