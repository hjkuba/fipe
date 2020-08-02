import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  selectEnableSearch,
  selectCurrentBrand,
  selectCurrentModel,
  selectCurrentYear,
} from '@/redux/selectors';
import styled from 'styled-components';
import { Button } from 'grommet';

import { BrandSelector, ModelSelector, YearSelector } from './components';

const Box = styled.main`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

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
    <Box>
      <BrandSelector />
      <ModelSelector />
      <YearSelector />
      <Button
        color="#00b0aa"
        primary
        onClick={handleSearch}
        label="Buscar"
        disabled={!enableSearch}
      />
    </Box>
  );
}

export default HomeContent;
