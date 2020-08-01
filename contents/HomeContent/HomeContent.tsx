import React from 'react';

import { BrandSelector, ModelSelector, YearSelector } from './components';

function HomeContent() {
  return (
    <>
      <BrandSelector />
      <ModelSelector />
      <YearSelector />
      <button
        type="button"
        onClick={() => console.log('Buscar informações do veículo')}
      >
        Buscar
      </button>
    </>
  );
}

export default HomeContent;
