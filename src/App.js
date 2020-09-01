import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faShoppingCart,
  faLeaf,
  faSeedling,
  faTshirt,
  faWater,
  faChevronUp,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Routes from './Routes';

library.add(
  faBars,
  faShoppingCart,
  faLeaf,
  faSeedling,
  faTshirt,
  faWater,
  faChevronUp,
  faFacebookF,
  faInstagram,
  faTwitter,
  faTimes
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    background: #000;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle whiteColor />
      <Routes />
    </>
  );
}
