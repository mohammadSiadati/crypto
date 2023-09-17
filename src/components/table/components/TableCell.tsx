import React from 'react';
import { StyledTableCell } from '../styled';

interface TableCellProps {
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  text: string;
}

export const TableCell = (props: TableCellProps) => {
  const { align = 'center', text } = props;
  return <StyledTableCell align={align}>{text}</StyledTableCell>;
};
