
import React from 'react';
import Carousel from './components/carousel/carousel';
import MovieTypeCarousel from './components/body/movie_type_carousel';
import "./style.scss"

function App() {
  return (
    <div className="App">
      <Carousel />
      <MovieTypeCarousel />
    </div>
  );

}


export default App;
