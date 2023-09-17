import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment, useEffect, useState } from 'react';
import { TableCell } from './components/TableCell';
import { TableBodyContent } from './components/TableBody';

export const TableData = () => {
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  console.log(favorite);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handlerClick = (id: any) => {
    setFavorite([id, ...favorite]);
  };

  const textHeader = [
    { id: 1, text: 'rank' },
    { id: 2, text: 'image' },
    { id: 3, text: 'name' },
    { id: 4, text: 'price' },
    { id: 5, text: 'symbol' },
    { id: 6, text: 'market-cap' },
    { id: 7, text: 'favorite' },
  ];

  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {textHeader.map((item) => (
              <Fragment key={item.id}>
                <TableCell text={item.text} />
              </Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: TableBodyContent) => (
            <Fragment key={item.market_cap_rank}>
              <TableBodyContent
                onClick={() => handlerClick(item.market_cap_rank)}
                current_price={item.current_price}
                image={item.image}
                market_cap={item.market_cap}
                market_cap_rank={item.market_cap_rank}
                name={item.name}
                symbol={item.symbol}
              />
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
