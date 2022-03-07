import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import iconLogOut from '../../assets/TasksTablePage/icons/log-out.svg';

import { makeIconWhiteOnTablet } from '../../utils/HelperFunctions/helperFunctions';

import { logout } from '../../utils/HelperFunctions/helperFunctions';

const Icon = styled.img`
  display: block;
  margin-right: 24px;
  margin-left: 23px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }

  ${makeIconWhiteOnTablet()}
`;

const IconLogOut: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Icon
      onClick={() => {
        logout(dispatch, history);
      }}
      src={iconLogOut}
      alt="bell"
    />
  );
};

export default IconLogOut;
