import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import NavIcon from './NavIcon';

import iconHome from '../../assets/TasksTablePage/icons/icon-home.svg';
import iconGlobe from '../../assets/TasksTablePage/icons/icon-globe.svg';
import iconArchive from '../../assets/TasksTablePage/icons/icon-archive.svg';
import iconPieChart from '../../assets/TasksTablePage/icons/icon-pie-chart.svg';
import iconDollarSign from '../../assets/TasksTablePage/icons/icon-dollar-sign.svg';
import iconDatabase from '../../assets/TasksTablePage/icons/icon-database.svg';
import iconNavigation from '../../assets/TasksTablePage/icons/icon-navigation.svg';

import { handleRedirectToDashboard } from '../../utils/HelperFunctions/helperFunctions';

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const NavigationMenu: React.FC = () => {
  const history = useHistory();

  return (
    <IconsContainer>
      <NavIcon
        onClick={() => {
          handleRedirectToDashboard(history);
        }}
        src={iconHome}
        alt="home"
      />
      <NavIcon src={iconGlobe} alt="globe" />
      <NavIcon src={iconArchive} alt="archive" />
      <NavIcon src={iconPieChart} alt="pie-chart" />
      <NavIcon src={iconDollarSign} alt="dollar" />
      <NavIcon src={iconDatabase} alt="database" />
      <NavIcon src={iconNavigation} alt="navigation" />
    </IconsContainer>
  );
};

export default NavigationMenu;
