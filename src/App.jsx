import React from 'react';
import Header from './components/header/Header';
import ImageCarousel from './components/imageCarousel/imageCarousel';
import Links from './components/links/Links';
import Socials from './components/socials/Socials';

const App = () => {
  return (
    <>
      <Links />
      <Header />
      <ImageCarousel />
      <Socials />
    </>
  )
}

export default App;
