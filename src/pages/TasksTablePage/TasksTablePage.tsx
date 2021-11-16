import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { State } from '../../types/stateTypes';

import TasksTable from './components/TasksTable';
import TableHeader from './components/TableHeader/TableHeader';

import IncomingClaim from './components/IncomingClaim/IncomingClaim';

import { TasksTablePageTypes } from '../../types/tasksTablePageTypes';

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

const TasksTablePage: React.FC<TasksTablePageTypes> = ({ openCreateNewClaimForm }) => {
  const TableElement: React.FC = () => {
    return (
      <>
        <TableHeader />
        <TasksTable />
      </>
    );
  };

  const Element = openCreateNewClaimForm ? IncomingClaim : TableElement;

  return (
    <TasksTablePageContainer>
      <Navbar />
      <HeaderAndTableWrapper>
        <Header />
        <Container>
          <Element />
        </Container>
      </HeaderAndTableWrapper>
    </TasksTablePageContainer>
  );
};

const mapStateToProps = (state: State) => {
  return { openCreateNewClaimForm: state.openCreateNewClaimForm };
};

export default connect(mapStateToProps, null)(TasksTablePage);
