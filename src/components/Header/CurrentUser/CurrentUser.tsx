import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { State } from '../../../types/stateTypes';

import IconUserAvatar from '../InconUserAvatar';

const CurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 40px 0 30px;
`;

const UserName = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.16em;

  margin-left: 20px;

  color: #000000;
`;

const CurrentUser: React.FC<{ userName?: string }> = ({ userName }) => {
  return (
    <CurrentUserContainer>
      <IconUserAvatar />
      <UserName>{userName}</UserName>
    </CurrentUserContainer>
  );
};

const mapStateToProps = (state: State) => {
  return { userName: state.userName };
};

export default connect(mapStateToProps, null)(CurrentUser);
