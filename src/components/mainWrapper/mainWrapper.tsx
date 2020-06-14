import React from 'react';
import { Container } from '@material-ui/core';

import { Header } from '../Header/Header';

export const mainWrapper = (WrappedComponent: any) => (props: any) => {
  return (
    <Container>
      <Header />
      <WrappedComponent {...props} />
    </Container>
  );
};
