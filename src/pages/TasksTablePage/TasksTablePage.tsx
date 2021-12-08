import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

import { redirectToMainPage } from '../../utils/HelperFunctions/helperFunctions';

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
  const history = useHistory();

  console.log(localStorage.getItem('currentUser'));

  if (!localStorage.getItem('currentUser')) {
    swal('Для доступа к странице нужно авторизоваться!');
    redirectToMainPage(history);
  }

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
