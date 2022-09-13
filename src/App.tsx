import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/tv" element={<TvPage />}/>
          <Route path="/tvdetail" element={<TvDetail />}/>
          <Route path="/moviedetail" element={<MovieDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
