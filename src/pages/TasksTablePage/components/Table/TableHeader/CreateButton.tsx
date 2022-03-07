import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import { useHistory, useRouteMatch } from 'react-router';

import ButtonElement from '../../../../../components/ButtonElement/ButtonElement';

import iconPlus from '../../../../../assets/TasksTablePage/icons/icon-plus.svg';

import { routes } from '../../../../../routes/routes';
import { hideElementOnTablet } from '../../../../../utils/HelperFunctions/helperFunctions';

import { maxWidth } from '../../../../../mediaQueries/mediaQueries';

const CreateBtn = styled(ButtonElement)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 174px;

  ${maxWidth.tablet} {
    width: 48px;
  }
`;

const ButtonIcon = styled.img`
  width: 40px;
`;

const ButtonText = styled.p`
  ${hideElementOnTablet()}
`;

const onHandleRedirectToCreateNewClaimForm = (history: RouteComponentProps['history'], url: string) => {
  history.push(`${url}${routes.create}`);
};

const CreateButton: React.FC = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CreateBtn onClick={() => onHandleRedirectToCreateNewClaimForm(history, url)} typeOfButton="filledGreen">
      <ButtonIcon src={iconPlus} alt="alt" />
      <ButtonText>Create claim</ButtonText>
    </CreateBtn>
  );
};

export default CreateButton;
