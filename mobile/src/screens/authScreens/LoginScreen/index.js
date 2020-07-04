import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../../components/Input';

export default () => (
	<Background>
		<StatusBar barStyle="light-content" backgroundColor="#31006a" />
		<Input placeholder="exemplo@live.com" />
		<Input placeholder="*******" />
		<Text>Esqueceu a senha?</Text>

		<Button laranja>
			<TextButton laranja>Entrar</TextButton>
		</Button>

		<Button>
			<TextButton>Cadastre-se</TextButton>
		</Button>
	</Background>
);

const Background = styled.View`
	flex: 1;
	background-color: #31006a;
	justify-content: center;
`;

const Text = styled.Text`
	text-align: right;
	margin-right: 40px;
	color: #f2f2f2;
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) => (props.laranja ? '#FF6E62' : '#EFEFEF')};
	border-radius: 40px;
	padding: 10px 0 10px 0;
	margin: 20px 65px 5px 65px;
`;

const TextButton = styled.Text`
	color: ${(props) => (props.laranja ? '#f2f2f2' : '#00456A')};
	font-weight: bold;
	text-align: center;
	font-size: 21px;
`;
