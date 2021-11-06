import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { connect } from 'react-redux';

import { Illustration } from './components/Illustration';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { State } from '../../redux/reducer';

import mainPageLogo from '../../assets/img/main-page-logo.svg';

const BeforeSidebarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 1680px) {
    flex-wrap: wrap;
  }
`;

const alignCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IllustrationSection = styled.div`
  width: 100%;

  height: 100%;
  min-height: 969px;

  padding: 100px 130px;

  background: rgba(211, 237, 225, 0.97);

  ${alignCenterCenter}
`;

const LogoAndFormSectionContainer = styled.div`
  width: 100%;

  height: 100%;
  min-height: 969px;

  padding: 141px 247px;

  ${alignCenterCenter}

  border: 2px solid yellow;
`;

const LogoFormWrapper = styled.div`
  ${alignCenterCenter};
  flex: 1 0 auto;
`;

const MainPageLogo = styled.img`
  margin-bottom: 119px;
`;

const FormContainer = styled.div`
  flex: 1 0 auto;
`;

const MainPageContainer = styled.div`
  min-height: 100vh;
`;

export const MainPage: React.FC<{ openRegForm?: boolean }> = ({ openRegForm }) => {
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
      <Sidebar />
    </MainPageContainer>
  );
};

const mapStateToProps = (state: State) => {
  return { openRegForm: state.updateRegistrationForm };
};

export const ConnectedMainPage = connect(mapStateToProps, null)(MainPage);
