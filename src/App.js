import React from 'react';
import Pages from './components/pages/Pages';
import { CartContextx } from "./Context/CartContext.jsx"

function App() {

  return (
    <CartContextx>
        <Pages/>
    </CartContextx>
  );
}

export default App;
