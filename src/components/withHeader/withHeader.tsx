import React from 'react';
import { Header } from '../Header/Header';

export const withHeader = (WrappedComponent: any) => (props: any) => {
  return (
    <>
      <Header />
      <WrappedComponent {...props} />
    </>
  );
};
