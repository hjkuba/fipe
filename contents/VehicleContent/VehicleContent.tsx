import React from 'react';
import { useSelector } from 'react-redux';
import { Anchor } from 'grommet';
import Link from 'next/link';
import styled from 'styled-components';
import { Tuple } from '@/components';
import { selectCurrentVehicle } from '@/redux/selectors';

const Box = styled.main`
  border-bottom: 2px solid #00b0aa;
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
  color: #00b0aa;
`;

function VehicleContent() {
  const vehicle = useSelector(selectCurrentVehicle);

  return (
    <div>
      <LinkWrapper>
        <Link href="/">
          <Anchor color="#00b0aa">Voltar</Anchor>
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
    </div>
  );
}

export default VehicleContent;
