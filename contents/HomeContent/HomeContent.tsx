import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  selectEnableSearch,
  selectCurrentBrand,
  selectCurrentModel,
  selectCurrentYear,
} from '@/redux/selectors';

import { BrandSelector, ModelSelector, YearSelector } from './components';

function HomeContent() {
  const enableSearch = useSelector(selectEnableSearch);
  const currentBrand = useSelector(selectCurrentBrand);
  const currentModel = useSelector(selectCurrentModel);
  const currentYear = useSelector(selectCurrentYear);
  const router = useRouter();

  function handleSearch() {
    const query = {
      brand: currentBrand?.codigo,
      model: currentModel?.codigo,
      year: currentYear?.codigo,
    };
    router.push({ pathname: '/vehicle', query });
  }

  return (
    <>
      <BrandSelector />
      <ModelSelector />
      <YearSelector />
      <button disabled={!enableSearch} type="button" onClick={handleSearch}>
        Buscar
      </button>
    </>
  );
}

export default HomeContent;
