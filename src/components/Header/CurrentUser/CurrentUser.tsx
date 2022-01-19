import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { connect, useDispatch } from 'react-redux';

import { RootState } from '../../../redux/rootReducer';
import actionGetUserData from '../../../redux/actions/actionGetUserData';

import {
  getUserId,
  getAuthLoadingState,
  getAuthErrorMessage,
  getAuthErrorState,
} from '../../../redux/selectors/selectors';

import IconUserAvatar from '../InconUserAvatar';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const CurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 170px;
  min-width: 170px;

  height: 60px;

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

const ErrorMessage = styled(UserName)`
  color: red;
`;

const CurrentUser: React.FC<{ userName?: string }> = ({ userName }) => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const loading = useSelector(getAuthLoadingState);
  const errorMessage = useSelector(getAuthErrorMessage);
  const error = useSelector(getAuthErrorState);

  useEffect(() => {
    dispatch(actionGetUserData(userId));
  }, []);

  if (error) {
    return (
      <CurrentUserContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </CurrentUserContainer>
    );
  }

  if (loading) {
    return (
      <CurrentUserContainer>
        <LoadingSpinner spinnerClass="smallSpinner" />
      </CurrentUserContainer>
    );
  }

  return (
    <CurrentUserContainer>
      <IconUserAvatar />
      <UserName>{userName}</UserName>
    </CurrentUserContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  return { userName: state.auth.userName };
};

export default connect(mapStateToProps, null)(CurrentUser);
