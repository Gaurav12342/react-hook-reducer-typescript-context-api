import React from 'react';
import './App.css';
import RootComponent from './component/index';
import Crud from './Crud/index';
const App = () => {
  return (
    <div className="App">
      <RootComponent />
      {'-------------------------------------'}
      <Crud />
    </div>
  );
}

export default App;
