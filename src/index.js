import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import { store } from './Redux/store';
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
    </BrowserRouter>

);