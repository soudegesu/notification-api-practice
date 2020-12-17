import React, { FC } from 'react';
import './App.css';
import TopPage from './pages/TopPage';
import { Container } from '@material-ui/core';

const App: FC = () => {
  return (
    <Container>
      <TopPage />
    </Container>
  );
};

export default App;
