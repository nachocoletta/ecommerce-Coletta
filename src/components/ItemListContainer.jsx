import React from 'react';
import styled from 'styled-components';

export default function ItemListContainer({ greeting }) {
	return <MensajeDeBienvenida>{greeting}</MensajeDeBienvenida>;
}

const MensajeDeBienvenida = styled.h2`
	font-size: 80px;
	text-align: center;
	padding: 15px;
	background-color: ghostwhite;
`;
