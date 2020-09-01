import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  WebHeader,
  Nav,
  CartContainer,
  CartCounter,
  MobileHeader,
  MobileMenu,
  DrawerButton,
  TitleBackgroundContainer,
  TitleContainer,
  Divider,
} from './styles';

import StyledLink from '../StyledLink';

export default function Header() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1100px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? 
        <WebHeader id="homepage">
          <Nav>
            <StyledLink smooth to="#homepage">
              <span>Página Inicial</span>
            </StyledLink>
            <StyledLink smooth to="#shop">
              <span>Loja</span>
            </StyledLink>
            <StyledLink smooth to="#about">
              <span>Sobre</span>
            </StyledLink>
            <StyledLink smooth to="#contact">
              <span>Contato</span>
            </StyledLink>
          </Nav>
          <StyledLink>
            <CartContainer>
              <FontAwesomeIcon
                id="cart"
                color="#000"
                icon="shopping-cart"
                size="3x"
              />
              <CartCounter>0</CartCounter>
            </CartContainer>
          </StyledLink>
        </WebHeader>
        : 
        <>
          <MobileMenu open={isDrawerOpen}>
            <DrawerButton onClick={handleDrawer}>
              <FontAwesomeIcon icon="times" size="3x" />
            </DrawerButton>
            <StyledLink smooth to="#homepage" onClick={handleDrawer}>
              Página Inicial
            </StyledLink>
            <StyledLink smooth to="#shop" onClick={handleDrawer}>
              Loja
            </StyledLink>
            <StyledLink smooth to="#about" onClick={handleDrawer}>
              Sobre
            </StyledLink>
            <StyledLink smooth to="#contact" onClick={handleDrawer}>
              Contato
            </StyledLink>
          </MobileMenu>
          <MobileHeader id="homepage">
            <DrawerButton onClick={handleDrawer}>
              <FontAwesomeIcon icon="bars" size="3x" />
            </DrawerButton>
            <CartContainer>
              <FontAwesomeIcon icon="shopping-cart" size="3x" />
              <CartCounter>0</CartCounter>
            </CartContainer>
          </MobileHeader>
        </>
      }

      <TitleBackgroundContainer>
        <TitleContainer>
          <h1 id="title">THRIFTSHOP DESIGNS</h1>
          <Divider />
          <h2 id="subtitle">COLEÇÃO URBANA</h2>
        </TitleContainer>
      </TitleBackgroundContainer>
    </>
  );
}
