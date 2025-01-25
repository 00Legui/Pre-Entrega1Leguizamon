import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
console.log('App rendering'); // Agregamos este console.log para debug
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
    </div>
  );
}

export default App;