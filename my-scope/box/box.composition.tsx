import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BasicBox, DerivedBox, Box, defaultTheme } from './box';

export const MyBasicBox = () => {
  return (
    <BasicBox>hello world!</BasicBox>
  );
}

export const MyDerivedBox = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DerivedBox>hello world!</DerivedBox>
    </ThemeProvider>
  );
}

export const MyBrokenBox = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>hello world!</Box>
    </ThemeProvider>
  );
}
