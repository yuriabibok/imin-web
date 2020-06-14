import React from 'react';
import { Container } from '@material-ui/core';

import { Header } from '../Header/Header';

export const mainWrapper = (WrappedComponent: any, title?: string) => (
  props: any,
) => {
  return (
    <Container>
      <Header title={title} />
      <WrappedComponent {...props} />
    </Container>
  );
};
