import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Input from '../../../components/Input';
import DropdownAlertCustom from '../../../components/DropdownAlert';

import { doLogin } from '../../../store/actions/auth/functions';
import {
	setEmail,
	setPassword,
	setLogado,
} from '../../../store/actions/auth/setTexts';

const entrar = require('../../../assets/signIn.png');

const LoginScreen = ({
	logado,
	setLogado,
	email,
	setEmail,
	password,
	setPassword,
	navigation: { navigate, dispatch },
}) => {
	useEffect(() => {
		if (logado === true) {
			dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: 'IntroApp' }],
				})
			);
		}
	});

	const passwordRef = useRef('');
	let notification = useRef(null);

	const handleSubmit = () => {
		doLogin(setLogado, email, password, notification);
	};

	const handleSignUp = () => {
		navigate('SignUpScreen');
	};

	const handleForgotPassword = () => {
		navigate('ForgotPassword');
	};

	return (
		<Background>
			<StatusBar barStyle="light-content" backgroundColor="#00456a" />

			<Imagem source={entrar} />

			<Input
				placeholder="exemplo@live.com"
				textInputValue="Email"
				value={email}
				onChangeText={setEmail}
				onSubmitEditing={() => {
					const { current } = passwordRef;
					current.focus();
				}}
			/>

			<Input
				placeholder="*******"
				textInputValue="Password"
				value={password}
				secureTextEntry
				onChangeText={setPassword}
				inputRef={passwordRef}
				onSubmitEditing={handleSubmit}
			/>
			<ButtonForgot onPress={handleForgotPassword}>
				<Text>Esqueceu a senha?</Text>
			</ButtonForgot>

			<Button onPress={handleSubmit} laranja>
				<TextButton laranja>Entrar</TextButton>
			</Button>

			<Button onPress={() => handleSignUp()}>
				<TextButton>Cadastre-se</TextButton>
			</Button>
			<DropdownAlertCustom
				paramRef={(ref) => {
					notification = ref;
				}}
				color="#00456a"
				inactiveStatusBarStyle="light-content"
			/>
		</Background>
	);
};

const mapStateToProps = ({ auth: { logado, email, password } }) => ({
	logado,
	email,
	password,
});

const mapDispatchToProps = {
	setLogado,
	setEmail,
	setPassword,
};

LoginScreen.propTypes = {
	email: PropTypes.string,
	setEmail: PropTypes.func,
	password: PropTypes.string,
	setPassword: PropTypes.func,
	logado: PropTypes.bool,
	setLogado: PropTypes.func,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

LoginScreen.defaultProps = {
	email: '',
	setEmail: undefined,
	password: '',
	setPassword: undefined,
	logado: false,
	setLogado: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const Background = styled.View`
	flex: 1;
	background-color: #00456a;
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

const ButtonForgot = styled.TouchableOpacity`
	left: -10px;
`;

const TextButton = styled.Text`
	color: ${(props) => (props.laranja ? '#f2f2f2' : '#00456A')};
	font-weight: bold;
	text-align: center;
	font-size: 21px;
`;

const Imagem = styled.Image`
	left: -30px;
	margin-left: 10px;
`;
