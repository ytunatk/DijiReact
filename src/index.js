import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MovieDetails from './components/body/movieDetail/movie_detail';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/moviedetail/:movieTitle" element={<MovieDetails />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
reportWebVitals();
