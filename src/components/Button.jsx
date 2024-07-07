import React from "react";
import styled from "styled-components";

export default function Button({ texto }) {
  return <Boton onClick={() => alert(texto)}>{texto}</Boton>;
}

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
