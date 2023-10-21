import logo from './logo.svg';
import './App.css';
import {DebounceSearch} from './pages/debounce'
import { CartHeader } from './pages/debounce/header.js';
import React, { Suspense } from 'react';
import { ToDoList } from './pages/debounce/sample1'
import { TicTac } from './pages/test1';
const ProductList = React.lazy(()=>import('./pages/debounce/productList'))
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <CartHeader/>
      <Suspense fallback={<div>Suspense Loading</div>}>
      <ProductList />
      </Suspense> */}
    </div>
  );
}

export default App;
