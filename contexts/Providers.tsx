import React from 'react';
import ThemeProvider from './ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default Providers;
