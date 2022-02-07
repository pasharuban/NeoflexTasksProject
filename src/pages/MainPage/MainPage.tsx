import React from 'react';
import styled from 'styled-components';

import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from '../../routes/routes';
import { getCurrentUserData } from '../../redux/selectors/selectors';

import Illustration from './components/Illustration/Illustration';
import Footer from '../../components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

import mainPageLogo from '../../assets/MainPage/icons/main-page-logo.svg';

import { minWidth, maxWidth } from '../../mediaQueries/mediaQueries';

import { getUpdateRegistrationForm } from '../../redux/selectors/selectors';

import { flexAlignCenterCenter, separatedBlockProperty } from '../../constants/mixins';
import { hideElementOnTablet } from '../../utils/HelperFunctions/helperFunctions';

const IllustrationSection = styled.div`
  ${flexAlignCenterCenter}
  ${separatedBlockProperty}

  background: rgba(211, 237, 225, 0.97);
  padding: 0 30px;

  ${hideElementOnTablet()};
`;

const LogoAndFormSectionContainer = styled.div`
  ${flexAlignCenterCenter};
  ${separatedBlockProperty}

  padding: 70px 30px;

  background: white;
`;

const MainPageContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${maxWidth.tablet} {
    height: 100%;
  }
`;

const BeforeSidebarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-grow: 1;
`;

const LogoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  flex-grow: 1;
`;

const MainPageLogo = styled.img`
  ${minWidth.largeScreen} {
    width: 15%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 466px;

  ${minWidth.largeScreen} {
    max-width: 80%;
  }
`;

const MainPage: React.FC = () => {
  const location: Record<string, any> = useLocation();
  const history = useHistory();
  const currentUser = useSelector(getCurrentUserData);
  const updateRegistrationForm = useSelector(getUpdateRegistrationForm);

  if (localStorage.getItem('userToken') || currentUser) {
    if (location.state?.backpath) history.push(location.state?.backpath);
    else history.push(routes.dashboard);
  }

  const FormElement = updateRegistrationForm ? RegistrationForm : LoginForm;

  return (
    <MainPageContainer>
      <BeforeSidebarContainer>
        <IllustrationSection>
          <Illustration />
        </IllustrationSection>
        <LogoAndFormSectionContainer>
          <LogoFormWrapper>
            <MainPageLogo src={mainPageLogo} alt="company logo" />
            <FormContainer>
              <FormElement />
            </FormContainer>
          </LogoFormWrapper>
        </LogoAndFormSectionContainer>
      </BeforeSidebarContainer>
      <Footer />
    </MainPageContainer>
  );
};

export default MainPage;
