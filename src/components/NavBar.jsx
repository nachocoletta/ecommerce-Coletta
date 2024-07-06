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
          <Li>
            <Boton onClick={() => alert("click")}>Inicio</Boton>
          </Li>
          <Li>
            <Boton onClick={() => alert("click")}>Mujer</Boton>
          </Li>
          <Li>
            <Boton onClick={() => alert("click")}>Hombre</Boton>
          </Li>
          <Li>
            <Boton onClick={() => alert("click")}>Infantil</Boton>
          </Li>
          <Li>
            <Boton onClick={() => alert("click")}>Ofertas</Boton>
          </Li>
          <Li>
            <Boton onClick={() => alert("click")}>Sobre Nosotros</Boton>
          </Li>
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

const Boton = styled.button`
  color: grey;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid transparent;

  &:hover {
    color: white;
    background-color: grey;
    border: 1px solid black;
    cursor: pointer;
  }
`;
