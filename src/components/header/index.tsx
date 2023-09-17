'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Divider } from '@mui/material';
import { StyledButton } from './styled';
import Image from 'next/image';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'transparent' }}>
        <Toolbar>
          <Image src="/logo.png" alt="logo-binance" width={35} height={35} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: '10px' }}
          >
            Crypto
          </Typography>
          <StyledButton>Login</StyledButton>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ margin: '10px 10px', background: 'gray' }}
          />
          <StyledButton>register</StyledButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: '1px solid gray' }} />
    </Box>
  );
};

export default Header;
