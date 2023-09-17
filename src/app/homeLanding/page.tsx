'use client';
import Header from '@/components/header';
import { Container } from '@mui/material';
import { TableData } from '@/components/table/Table';
import { useState } from 'react';

const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const page = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <TableData />
      </Container>
    </>
  );
};

export default page;
