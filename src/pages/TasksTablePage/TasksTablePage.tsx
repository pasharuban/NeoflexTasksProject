import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

import { State } from '../../types/stateTypes';

import TasksTable from './components/TasksTable';
import TableHeader from './components/TableHeader/TableHeader';

import NewClaim from './components/NewClaim/NewClaim';
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

const TasksTablePage: React.FC<TasksTablePageTypes> = ({ openCreateNewClaimForm, openIncomingClaimForm }) => {
  const TableElement: React.FC = () => {
    return (
      <>
        <TableHeader />
        <TasksTable />
      </>
    );
  };

  let Element = TableElement;

  if (openCreateNewClaimForm) Element = NewClaim;
  else if (openIncomingClaimForm) Element = IncomingClaim;
  else Element = TableElement;

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
  return { openCreateNewClaimForm: state.openCreateNewClaimForm, openIncomingClaimForm: state.openIncomingClaimForm };
};

export default connect(mapStateToProps, null)(TasksTablePage);
