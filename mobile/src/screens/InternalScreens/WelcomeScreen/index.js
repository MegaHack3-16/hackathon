/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { setConstructionsList } from '../../../store/actions/internal/setTexts';
import { getConstructionsList } from '../../../store/actions/internal/functions';

const WelcomeScreen = ({
	nomeCompleto,
	setConstructionsList,
	navigation: { dispatch },
}) => {
	const primeiroNome = nomeCompleto.split(' ').slice(0, -1).join(' ');

	useEffect(() => getConstructionsList(setConstructionsList), {});

	const handleSubmit = () => {
		dispatch(
			CommonActions.reset({
				index: 0,
				routes: [{ name: 'InternalApp' }],
			})
		);
	};

	return (
		<Background>
			<StatusBar barStyle="light-content" backgroundColor="#00456a" />

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
	setConstructionsList: PropTypes.func.isRequired,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

const mapStateToProps = ({ auth: { nomeCompleto } }) => ({
	nomeCompleto,
});

const mapDispatchToProps = {
	setConstructionsList,
	getConstructionsList,
};

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
