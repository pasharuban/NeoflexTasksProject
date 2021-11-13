import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import TasksTable from './components/TasksTable';

const TasksTablePageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const TasksTablePage: React.FC = () => {
  return (
    <TasksTablePageContainer>
      <Navbar />
      <Container>
        <Header />
        <TasksTable />
      </Container>
    </TasksTablePageContainer>
  );
};
