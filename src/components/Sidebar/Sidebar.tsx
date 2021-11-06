import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

import logo from '../../assets/img/sidebar-logo.svg';

const columnFlexStartCenter = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const rowFlexStartCenter = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img<{ logoMargin: string }>`
  margin: ${(props) => props.logoMargin || '10px'};
`;

const SidebarPanel = styled.div<{ containerType?: string }>`
  background: #7db59a;
  width: 100%;
  ${(props) => {
    const { containerType } = props;
    switch (containerType) {
      case 'column':
        return columnFlexStartCenter;
      default:
        return rowFlexStartCenter;
    }
  }}
`;

export const Sidebar: React.FC = () => {
  return (
    <SidebarPanel>
      <Logo src={logo} alt="company logo" logoMargin="17px 30px" />
    </SidebarPanel>
  );
};
