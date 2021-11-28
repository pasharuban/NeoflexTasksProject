import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import TasksTablePage from './pages/TasksTablePage/TasksTablePage';
import NewClaimForm from './pages/TasksTablePage/components/NewClaim/NewClaimForm';
import IncomingClaimForm from './pages/TasksTablePage/components/IncomingClaim/IncomingClaimForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/dashboard">
          <TasksTablePage />
        </Route>
        <Route path="/create">
          <NewClaimForm />
        </Route>
        <Route path="/edit/:id">
          <IncomingClaimForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
