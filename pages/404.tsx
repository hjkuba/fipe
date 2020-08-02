import React from 'react';
import { Error } from '@/components';

function Page404() {
  return <Error statusCode={404} message="Página não encontrada" />;
}

export default Page404;
