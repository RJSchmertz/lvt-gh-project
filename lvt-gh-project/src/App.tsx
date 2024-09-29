import React from 'react';
import AppHome from './components/AppHome/AppHome';
import Providers from './Context/Providers';
import './index.css';

function App() {
  return (
    <Providers>
      <AppHome />
    </Providers>
  );
}

export default App;
