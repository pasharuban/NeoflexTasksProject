import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import { Illustration } from './components/Illustration';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

import mainPageLogo from '../../assets/img/main-page-logo.svg';

const BeforeSidebarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const alignCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IllustrationSection = styled.div`
  width: 100%;
  max-width: 960px;

  height: 100vh;

  padding: 100px 130px;
  background: rgba(211, 237, 225, 0.97);

  ${alignCenterCenter}
`;

const LogoAndFormSectionContainer = styled.div`
  width: 100%;
  max-width: 960px;

  height: 100vh;

  padding: 141px 242px;
  ${alignCenterCenter};
`;

const LogoAndFormSection: React.FC = ({ children }) => {
  return <LogoAndFormSectionContainer>{children}</LogoAndFormSectionContainer>;
};

const MainPageLogo = styled.img`
  margin-bottom: 119px;
`;

const MainPageContainer = styled.div`
  height: 100vh;
`;
export const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <BeforeSidebarContainer>
        <IllustrationSection>
          <Illustration />
        </IllustrationSection>
        <LogoAndFormSection>
          <MainPageLogo src={mainPageLogo} alt="company logo" />
          <RegistrationForm />
        </LogoAndFormSection>
      </BeforeSidebarContainer>
      <Sidebar />
    </MainPageContainer>
  );
};

export default MainPage;
