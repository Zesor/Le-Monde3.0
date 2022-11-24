import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { CookiesProvider } from 'react-cookie';

function getLibrary(provider) {
  return new Web3(provider)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
  <CookiesProvider>
    <App />
  </CookiesProvider>
  </Web3ReactProvider>
);
