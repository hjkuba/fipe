import React from 'react';
import styled from 'styled-components';

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

function Page404() {
  return (
    <Container>
      <StatusCodeWrapper>
        <StatusCode>404</StatusCode>
      </StatusCodeWrapper>
      <Message>Página Não encontrada</Message>
    </Container>
  );
}

export default Page404;
