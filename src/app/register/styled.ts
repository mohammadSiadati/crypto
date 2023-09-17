'use client';
import { Container, TextField, styled } from '@mui/material';

export const StyledContainer = styled(Container)`
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;

export const StyledInput = styled(TextField)`
  width: 100%;
  margin: 15px 0;
  .MuiFormLabel-root {
    color: white;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: whitesmoke;
  }
  .MuiOutlinedInput-root {
    color: whitesmoke;
  }
`;
