import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Anchor, ThemeContext } from 'grommet';
import Link from 'next/link';
import styled from 'styled-components';
import { Tuple } from '@/components';
import { selectCurrentVehicle } from '@/redux/selectors';

import type { ThemeType } from 'grommet';

const Box = styled.div`
  border-bottom: 2px solid
    ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
  margin-bottom: 16px;
`;

const LinkWrapper = styled.div`
  margin-bottom: 16px;
  text-decoration: underline;
`;

const Price = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.8rem;
  color: ${({ theme }: { theme: ThemeType }) => theme.global?.colors?.brand};
`;

function VehicleContent() {
  const vehicle = useSelector(selectCurrentVehicle);
  const theme = useContext<ThemeType>(ThemeContext);

  return (
    <main>
      <LinkWrapper>
        <Link href="/">
          <Anchor color={theme.global?.colors?.brand}>Voltar</Anchor>
        </Link>
      </LinkWrapper>
      {vehicle ? (
        <Box>
          <Tuple label="Marca" value={vehicle.Marca} />
          <Tuple label="Modelo" value={vehicle.Modelo} />
          <Tuple label="Ano" value={vehicle.AnoModelo} />
          <Tuple label="Tipo do Veículo" value={vehicle.TipoVeiculo} />
          <Tuple label="Combustível" value={vehicle.Combustivel} />
          <Tuple
            label="Sigla do Combustível"
            value={vehicle?.SiglaCombustivel}
          />
          <Tuple label="Mês de Referência" value={vehicle.MesReferencia} />
          <Tuple label="Código FIPE" value={vehicle.CodigoFipe} />
        </Box>
      ) : null}
      <Price>{vehicle?.Valor}</Price>
    </main>
  );
}

export default VehicleContent;
