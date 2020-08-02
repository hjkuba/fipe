import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from 'grommet';

interface MainLayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 0 0 16px;
  padding-left: 16px;
  border-left: 2px solid #00b0aa;
  color: #00b0aa;
`;

const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MainLayout({ children }: MainLayoutProps) {
  return (
    <LayoutContainer>
      <Header justify="center">
        <TitleWrapper>
          <img src="/images/mobiauto-logo.png" alt="logo" width={160} />
          <Title>
            Tabela <strong>FIPE</strong>
          </Title>
        </TitleWrapper>
      </Header>
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  );
}

export default MainLayout;