import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import iconLogOut from '../../assets/TasksTablePage/icons/log-out.svg';
import { actionLogout } from '../../redux/actions/actionCreators';
import { redirectToMainPage } from '../../utils/HelperFunctions/helperFunctions';

import { api } from '../../utils/api';

const Icon = styled.img`
  margin-right: 35px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const IconLogOut: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Icon
      onClick={() => {
        localStorage.removeItem('userToken');
        delete (api.defaults.headers as any).Authorization;
        dispatch(actionLogout());
        redirectToMainPage(history);
      }}
      src={iconLogOut}
      alt="bell"
    />
  );
};

export default IconLogOut;
