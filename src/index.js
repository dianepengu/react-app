import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import './index.css';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';

import Navbar from './components/Navbar';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='flex flex-col w-screen h-screen items-center space-y-4'>
        <div className='flex flex-col items-center mt-10 space-y-4'>
          <h1 className='text-3xl font-bold'>Simple React</h1>
          <Navbar />
        </div>
        <div className='flex flex-col items-center w-3/4'>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
