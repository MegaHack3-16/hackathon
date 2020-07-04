import React from 'react';
import styled from 'styled-components/native';
import Input from '../../../components/Input';

export default () => (
	<Background>
		<Input />
	</Background>
);

const Background = styled.View`
	flex: 1;
	background-color: #31006a;
`;
