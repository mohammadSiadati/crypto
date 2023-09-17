import { Box, Button } from '@mui/material';
import React from 'react';
import { StyledContainer, StyledInput } from './styled';

const page = () => {
  return (
    <StyledContainer>
      <Box
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          border: '1px solid yellow',
          // background: 'white',
          width: '400px',
          height: '400px',
          padding: '50px',
        }}
      >
        <img src="logo.png" width={45} height={45} alt="logo" />
        <p>SignUp</p>
        <StyledInput
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
        />
        <StyledInput
          id="outlined-multiline-flexible"
          label="Password"
          multiline
          maxRows={4}
        />
      </Box>
    </StyledContainer>
  );
};

export default page;
