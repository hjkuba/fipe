import React from 'react';
import styled from 'styled-components';

import type { ReactElement } from 'react';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const StatusCodeWrapper = styled.div`
  border-radius: 50%;
  background-color: #00b0aa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  color: white;
  margin-bottom: 24px;
`;

const StatusCode = styled.h1`
  margin: 0;
`;

const Message = styled.p`
  margin: 0;
  color: #00b0aa;
  text-align: center;
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
