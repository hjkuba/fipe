import React from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';

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
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <Container>
      <StatusCodeWrapper>
        <StatusCode>{statusCode}</StatusCode>
      </StatusCodeWrapper>
      <Message>
        <strong>Ocorreu um erro</strong> e não foi possível exibir a página.
        <br /> Por favor, tente novamente :(
      </Message>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return { props: { statusCode: res.statusCode } };
};

export default ErrorPage;
