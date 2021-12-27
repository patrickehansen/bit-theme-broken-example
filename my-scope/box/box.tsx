import React, { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

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

export function DerivedBoxWithChildren({children}: BoxProps) {
  return (
    <DerivedBox>
      {children}
    </DerivedBox>
  )
}

export function BrokenBox({theme, children}: BoxProps) {
  return (
    <DerivedBox
      style={{
        padding: theme.sizes.M
      }}
    >
      {children}
    </DerivedBox>
  )
}

function Box({theme, children}: BoxProps) {
  return (
    <DerivedBox
      style={{
        padding: theme.sizes.M
      }}
    >
      {children}
    </DerivedBox>
  )
}

export const FixedBox = withTheme(Box);
