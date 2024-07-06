import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

export default function NavBar() {
  return (
    <div>
      <Encabezado>
        <ContenedorImagenYLinea>
          <ImageLogoEncabezado src={logo} alt="logo" />
          <Linea />
          <Input type="text" placeholder=" ...buscar" />
        </ContenedorImagenYLinea>
        <ContenedorEncabezadoDerecho>
          <CartWidget />
        </ContenedorEncabezadoDerecho>
      </Encabezado>
      <NavbarContainer>
        <UlContainer>
          <Li>Inicio</Li>
          <Li>Mujer</Li>
          <Li>Hombre</Li>
          <Li>Infantil</Li>
          <Li>Ofertas</Li>
          <Li>Sobre Nosotros</Li>
        </UlContainer>
      </NavbarContainer>
    </div>
  );
}

const Encabezado = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContenedorImagenYLinea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  gap: 10pz;
`;
const Linea = styled.div`
  width: 0.1px;
  height: 90px;
  background-color: black;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 320px;
`;

const ContenedorEncabezadoDerecho = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarContainer = styled.nav`
  border: 1px solid black;
  background-color: darkgrey;
`;

const ImageLogoEncabezado = styled.img`
  width: 20rem;
  height: 7rem;
`;

const UlContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

const Li = styled.li`
  font-size: larger;
`;
