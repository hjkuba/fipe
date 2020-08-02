import React from 'react';
import { Error } from '@/components';

import type { GetServerSideProps } from 'next';

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  return (
    <Error
      statusCode={statusCode}
      message={
        <span>
          <strong>Ocorreu um erro</strong> e não foi possível exibir a página.
          <br />
          Por favor, tente novamente :(
        </span>
      }
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return { props: { statusCode: res.statusCode } };
};

export default ErrorPage;
