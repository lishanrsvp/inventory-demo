import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import ProductDashboard from './ProductDashboard';
import Login from './Login'; // akan kita buat setelah ini
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
