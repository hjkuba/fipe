import React from 'react';
import styled from 'styled-components';

import type { ReactElement } from 'react';
import type { ThemeType } from 'grommet';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const StatusCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.global?.colors?.brand};
  color: white;
`;

const StatusCode = styled.h1`
  margin: 0;
`;

const Message = styled.p`
  margin: 0;
  text-align: center;
  color: ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
`;

interface ErrorPageProps {
  statusCode: number;
  message: string | ReactElement;
}

function Error({ statusCode, message }: ErrorPageProps) {
  return (
    <Container>
      <StatusCodeWrapper>
        <StatusCode>{statusCode}</StatusCode>
      </StatusCodeWrapper>
      <Message>{message}</Message>
    </Container>
  );
}

export default Error;
