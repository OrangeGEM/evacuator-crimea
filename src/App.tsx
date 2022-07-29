import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About/about';
import Contracts from './pages/Contacts/contracts';
import Cooperation from './pages/Cooperation/cooperation';
import Main from './pages/Main/main';
import Rates from './pages/Rates/rates';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/cooperation" element={<Cooperation />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
