import React from 'react';
import { Header } from '../Header/Header';
import { Container } from '@material-ui/core';

export const mainWrapper = (WrappedComponent: any) => (props: any) => {
  return (
    <Container>
      <Header />
      <WrappedComponent {...props} />
    </Container>
  );
};
