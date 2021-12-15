import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';

import { routes } from '../../routes/routes';
import { RootState } from '../../redux/rootReducer';
import { getCurrentUserData } from '../../redux/selectors/selectors';

import { MainPageTypes } from '../../types/mainPageTypes';

import Illustration from './components/Illustration';
import Footer from '../../components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

import mainPageLogo from '../../assets/MainPage/icons/main-page-logo.svg';

import { minWidth, maxWidth } from '../../mediaQueries/mediaQueries';

const alignCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IllustrationSection = styled.div`
  width: 100%;

  height: 100%;
  min-height: 100%;

  flex-grow: 1;

  padding: 1%;

  background: rgba(211, 237, 225, 0.97);

  ${alignCenterCenter}

  ${minWidth.largeScreen} {
    padding: 1%;
  }
`;

// override styles,because it has same,except bg.
const LogoAndFormSectionContainer = styled(IllustrationSection)`
  background: white;

  padding: 2%;

  ${minWidth.largeScreen} {
    padding: 4% 2%;
  }

  ${maxWidth.tablet} {
    min-height: 100vh;
  }
`;

const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${maxWidth.tablet} {
    height: 100%;
  }
`;

const BeforeSidebarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-grow: 5;

  ${maxWidth.tablet} {
    flex-wrap: wrap;
  }
`;

const LogoFormWrapper = styled.div`
  width: 100%;

  flex: 1 0 auto;
  ${alignCenterCenter};
`;

const MainPageLogo = styled.img`
  margin-bottom: 119px;

  ${minWidth.largeScreen} {
    width: 15%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 466px;

  flex: 1 0 auto;

  ${minWidth.largeScreen} {
    max-width: 80%;
  }
`;

const MainPage: React.FC<MainPageTypes> = ({ openRegForm }) => {
  const location: Record<string, any> = useLocation();
  const history = useHistory();
  const currentUser = useSelector(getCurrentUserData);

  if (localStorage.getItem('userToken') || currentUser) {
    if (location.state?.backpath) history.push(location.state?.backpath);
    else history.push(routes.dashboard);
  }

  const FormElement = openRegForm ? RegistrationForm : LoginForm;

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

const mapStateToProps = (state: RootState) => {
  return {
    openRegForm: state.forms.updateRegistrationForm,
  };
};

export default connect(mapStateToProps, null)(MainPage);
