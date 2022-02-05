import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ListContainer/ItemList';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <ItemListContainer text="HOLA COMO ESTAN ME LLAMO TIMOTEO GAMBELLA Y SOY PROGRAMADOR" title="TIMOTEO" />
        <ItemListContainer text="ESTE ES EL CURSO DE REACT JS Y ESTA ES UNA PRUEBA DE COMPONENTES" title="PROGRAMACION" />
    </React.Fragment>

  );
}

export default App;
