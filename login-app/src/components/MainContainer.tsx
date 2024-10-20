// MainContainer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const MainContainer = ({ children }: any) => (
//   <Container className="my-5">
//     {children}
//   </Container>
  <>{children}</>
);

export default MainContainer;
