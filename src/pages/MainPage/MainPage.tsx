import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { connect } from 'react-redux';

import { Illustration } from './components/Illustration';
import { Footer } from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { State } from '../../redux/reducer';

import mainPageLogo from '../../assets/img/main-page-logo.svg';

import { MainPageTypes } from '../../types/mainPageTypes';

import breakPoints from '../../breakPoints/breakPoints';

const { smaller1100, larger2000 } = breakPoints;

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

  padding: 5%;

  background: rgba(211, 237, 225, 0.97);

  ${alignCenterCenter}

  @media screen and (min-width: ${larger2000}) {
    padding: 1%;
  }
`;

// override styles,because it has same,except bg.
const LogoAndFormSectionContainer = styled(IllustrationSection)`
  background: white;

  @media screen and (min-width: ${larger2000}) {
    padding: 4% 2%;
  }
  @media screen and (max-width: ${smaller1100}) {
    min-height: 100vh;
  }
`;

const MainPageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${smaller1100}) {
    height: 100%;
  }
`;

const BeforeSidebarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-grow: 5;

  @media screen and (max-width: ${smaller1100}) {
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

  @media screen and (min-width: ${larger2000}) {
    width: 15%;
  }
`;

const FormContainer = styled.div`
  flex: 1 0 auto;

  @media screen and (min-width: ${larger2000}) {
    width: 80%;
  }
`;

export const MainPage: React.FC<MainPageTypes> = ({ openRegForm }) => {
  let Form = <LoginForm />;

  if (openRegForm) Form = <RegistrationForm />;

  return (
    <MainPageContainer>
      <BeforeSidebarContainer>
        <IllustrationSection>
          <Illustration />
        </IllustrationSection>
        <LogoAndFormSectionContainer>
          <LogoFormWrapper>
            <MainPageLogo src={mainPageLogo} alt="company logo" />
            <FormContainer>{Form}</FormContainer>
          </LogoFormWrapper>
        </LogoAndFormSectionContainer>
      </BeforeSidebarContainer>
      <Footer />
    </MainPageContainer>
  );
};

const mapStateToProps = (state: State) => {
  return { openRegForm: state.updateRegistrationForm };
};

export const ConnectedMainPage = connect(mapStateToProps, null)(MainPage);
