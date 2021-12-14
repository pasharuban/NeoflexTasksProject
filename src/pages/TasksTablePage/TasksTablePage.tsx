import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { TasksTablePageTypes } from '../../types/tasksTablePageTypes';

import TasksTablePageSwitch from './TaskTablePageSwitch';

const TasksTablePageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: white;
`;

const HeaderAndTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
const Container = styled(HeaderAndTableWrapper)`
  width: 94%;
  align-self: center;
  margin-top: 58px;
`;

const TasksTablePage: React.FC<TasksTablePageTypes> = () => {
  return (
    <TasksTablePageContainer>
      <Navbar />
      <HeaderAndTableWrapper>
        <Header />
        <Container>
          <TasksTablePageSwitch />
        </Container>
      </HeaderAndTableWrapper>
    </TasksTablePageContainer>
  );
};

export default TasksTablePage;
