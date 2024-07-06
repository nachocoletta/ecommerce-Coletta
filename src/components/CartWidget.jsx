import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export default function CartWidget() {
  return (
    <Contenedor>
      <Parrafo>2</Parrafo>
      <FaShoppingCart style={{ "font-size": "33px" }} />
    </Contenedor>
  );
}

const Contenedor = styled.div`
  position: relative;
`;

const Parrafo = styled.p`
  position: absolute;
  color: white;
  text-decoration: bold;
  background-color: grey;
  padding: 3px;
  border-radius: 150px;
  left: 20px;
  bottom: 25px;
`;
