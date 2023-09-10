import Header from '@/components/header';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const page = () => {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then;

  return (
    <>
      <Header />
      <Container>
        <Box>{/* <Image src={} /> */}</Box>
      </Container>
    </>
  );
};

export default page;
