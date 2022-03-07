import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import NavIcon from './NavIcon';

import { handleRedirectToDashboard } from '../../utils/HelperFunctions/helperFunctions';
import { NavMenuTypes } from '../../types/navMenuTypes';

import navIcons from '../../constants/navIcons';

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const NavigationMenu: React.FC<NavMenuTypes> = ({ horizontalAligment, marginLeft }) => {
  const history = useHistory();

  navIcons[0].onClick = () => {
    handleRedirectToDashboard(history);
  };

  return (
    <IconsContainer>
      {navIcons.map((navIcon) => {
        const { src, alt, label, onClick } = navIcon;

        return (
          <NavIcon
            key={label}
            src={src}
            alt={alt}
            label={label}
            horizontalAligment={horizontalAligment}
            marginLeft={marginLeft}
            onClick={onClick}
          />
        );
      })}
    </IconsContainer>
  );
};

export default NavigationMenu;
