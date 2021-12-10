import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import { useHistory, useRouteMatch } from 'react-router';

import ButtonElement from '../../../../components/ButtonElement/ButtonElement';

import iconPlus from '../../../../assets/TasksTablePage/icons/icon-plus.svg';

import { routes } from '../../../../routes/routes';

const CreateBtn = styled(ButtonElement)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 174px;
`;

const ButtonIcon = styled.img``;

const onHandleRedirectToCreateNewClaimForm = (history: RouteComponentProps['history'], url: string) => {
  history.push(`${url}${routes.create}`);
};

const CreateButton: React.FC = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CreateBtn onClick={() => onHandleRedirectToCreateNewClaimForm(history, url)} typeOfButton="filledGreen">
      <ButtonIcon src={iconPlus} alt="alt" />
      Create claim
    </CreateBtn>
  );
};

export default CreateButton;
