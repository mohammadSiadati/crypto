import { TableRow } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { StyledTableCell } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';

export interface TableBodyContent {
  market_cap_rank: string;
  image: string;
  name: string;
  symbol: string;
  market_cap: string;
  current_price: string;
  onClick: MouseEventHandler<SVGSVGElement>;
}

export const TableBodyContent = (props: TableBodyContent) => {
  const {
    market_cap_rank,
    image,
    name,
    current_price,
    symbol,
    market_cap,
    onClick,
  } = props;
  return (
    <TableRow>
      <StyledTableCell
        component="th"
        align="center"
        scope="row"
        sx={{ color: 'white' }}
      >
        {market_cap_rank}
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" align="center">
        <img src={image} alt="logo" width="35px" height="35px" />
      </StyledTableCell>
      <StyledTableCell
        component="th"
        scope="row"
        sx={{ color: 'white' }}
        align="center"
      >
        {name}
      </StyledTableCell>
      <StyledTableCell
        component="th"
        align="center"
        scope="row"
        sx={{ color: 'white' }}
      >
        {current_price}
      </StyledTableCell>
      <StyledTableCell
        component="th"
        scope="row"
        align="center"
        sx={{ color: 'white' }}
      >
        {symbol}
      </StyledTableCell>
      <StyledTableCell
        component="th"
        align="center"
        scope="row"
        sx={{ color: 'white' }}
      >
        {market_cap}
      </StyledTableCell>
      <StyledTableCell
        component="th"
        scope="row"
        align="center"
        sx={{ color: 'white' }}
      >
        <Icon
          onClick={onClick}
          icon="pepicons-print:bookmark-circle"
          fontSize="30px"
        />
      </StyledTableCell>
    </TableRow>
  );
};
