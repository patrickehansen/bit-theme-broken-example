import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BasicBox, DerivedBox, BrokenBox, FixedBox, defaultTheme } from './box';

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
      <BrokenBox>hello world!</BrokenBox>
    </ThemeProvider>
  );
}

export const MyFixedBox = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FixedBox>hello world!</FixedBox>
    </ThemeProvider>
  );
}