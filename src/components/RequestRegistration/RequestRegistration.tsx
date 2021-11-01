import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const textStyles = css`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #2d3436;
`;

const RequestRegistrationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;

const RequestRegistrationText = styled.p`
  ${textStyles}
`;

const RequestRegistrationLink = styled.span`
  color: #31b8b8;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    color: #1d9494;
  }
`;
export const RequestRegistration: React.FC = () => {
  return (
    <RequestRegistrationContainer>
      <RequestRegistrationText>
        Not a member?
        <RequestRegistrationLink>Request registration.</RequestRegistrationLink>
      </RequestRegistrationText>
    </RequestRegistrationContainer>
  );
};
