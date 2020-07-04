/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WelcomeScreen = ({ nomeCompleto, navigation: { navigate } }) => {
	const primeiroNome = nomeCompleto.split(' ').slice(0, -1).join(' ');

	const handleSubmit = () => {
		console.log('Proxima tela');
	};

	return (
		<Background>
			<Container>
				<Title>Bem-vindo, {primeiroNome}!</Title>
				<Text>Para começar, clique em continuar</Text>
				<Text>Para adiconar sua primeira obra</Text>
			</Container>
			<Button onPress={handleSubmit} laranja>
				<TextButton laranja>Continuar</TextButton>
			</Button>
		</Background>
	);
};

WelcomeScreen.propTypes = {
	nomeCompleto: PropTypes.string.isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth: { nomeCompleto } }) => ({
	nomeCompleto,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);

const Background = styled.View`
	flex: 1;
	background-color: #00456a;
	justify-content: center;
`;

const Container = styled.View`
	align-items: center;
	margin: 20px;
`;

const Title = styled.Text`
	font-weight: bold;
	font-size: 25px;
	color: #f2f2f2;
	margin-bottom: 20px;
`;

const Text = styled.Text`
	color: #f2f2f2;
	font-size: 20px;
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) =>
		props.laranja ? (props.semfundo ? 'transparent' : '#FF6E62') : '#EFEFEF'};
	border-radius: 40px;
	padding: 10px 0 10px 0;
	margin: 20px 65px 5px 65px;
`;

const TextButton = styled.Text`
	color: ${(props) => (props.laranja ? '#f2f2f2' : '#00456A')};
	border-width: ${(props) => (props.semFundo ? '4px' : '0')};
	border-radius: ${(props) => (props.semFundo ? '40px' : '0')};
	padding: ${(props) => (props.semFundo ? '15px 0 10px 0' : '5px 0 5px 0')};
	border-color: ${(props) => (props.semFundo ? '#f2f2f2' : 'undefined')};
	font-weight: bold;
	text-align: center;
	font-size: 21px;
`;