import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Orders } from './components/Orders/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Clients } from './components/Clients/Clients';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='clients' element={<Clients />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
