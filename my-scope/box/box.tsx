import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type BoxProps = ThemeProps & {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export type ThemeProps = {
  theme?: Theme;
}

export interface Theme {
  sizes: {
    M: string;
  }
}

export const defaultTheme = {
  sizes: {
    M: '1rem'
  }
}

export const BasicBox = styled.div({
  boxSizing: 'border-box',
}) 

export const DerivedBox = styled(BasicBox)({
  padding: ({theme}) => theme.sizes.M,
})

export function Box({theme, children}: BoxProps) {
  return (
    <BasicBox
      style={{
        padding:theme.sizes.M
      }}
    >
      {children}
    </BasicBox>
  )
}
