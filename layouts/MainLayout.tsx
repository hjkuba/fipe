import React, { ReactNode } from 'react';
import { Header } from 'grommet';
import styled from 'styled-components';

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
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0 0 0 16px;
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
