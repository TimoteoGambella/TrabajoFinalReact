import React from 'react';
import Pages from './components/pages/Pages';
import { UseCartContext } from "./Context/CartContext.jsx"

function App() {

  return (
    <UseCartContext>
        <Pages/>
    </UseCartContext>
  );
}

export default App;
