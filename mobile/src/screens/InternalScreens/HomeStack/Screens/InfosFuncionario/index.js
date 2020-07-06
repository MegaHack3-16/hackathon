import React, { useState } from 'react';
import { StatusBar, Modal } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../../../../components/Header';

const Index = ({ navigation: { navigate, dispatch, goBack }, route }) => {
	const { itemValue } = route.params;

	const [openModalTemp, setOpenModalTemp] = useState(false);
	const [temperatura, setTemperatura] = useState('');

	const date = new Date();

	const ano = date.getFullYear();
	const mes = date.getMonth();

	let mesTexto;

	switch (mes) {
		case 0:
			mesTexto = 'Janeiro';
			break;
		case 1:
			mesTexto = 'Fevereiro';
			break;
		case 2:
			mesTexto = 'Março';
			break;
		case 3:
			mesTexto = 'Abril';
			break;
		case 4:
			mesTexto = 'Maio';
			break;
		case 5:
			mesTexto = 'Junho';
			break;
		case 6:
			mesTexto = 'Julho';
			break;
		case 7:
			mesTexto = 'Agosto';
			break;
		case 8:
			mesTexto = 'Setembro';
			break;
		case 9:
			mesTexto = 'Outubro';
			break;
		case 10:
			mesTexto = 'Novembro';
			break;
		case 11:
			mesTexto = 'Dezembro';
			break;
		default:
			mesTexto = null;
			break;
	}

	const day = date.getDate();

	return (
		<>
			<Container>
				<Header laranja dispatch={dispatch} goBack={goBack} />
				<StatusBar barStyle="light-content" backgroundColor="#ff6e62" />
				<ContainerInterno>
					<ContainerText>
						<Text azul>Check-in de </Text>
						<Text>{itemValue}</Text>
					</ContainerText>
					<TextYear>
						{day} de {mesTexto} de {ano}
					</TextYear>
					<ContainerButtons>
						<Buttons onPress={() => setOpenModalTemp(true)}>
							<ButtonText>Registrar temperatura</ButtonText>
						</Buttons>
						<Buttons onPress={() => navigate('RegistrarEPIs')}>
							<ButtonText>Registrar EPIs</ButtonText>
						</Buttons>
						<Buttons onPress={() => navigate('Sintomas Virais')}>
							<ButtonText>Sintomas Virais</ButtonText>
						</Buttons>
					</ContainerButtons>
				</ContainerInterno>
				<Modal
					animationType="slide"
					transparent={false}
					visible={openModalTemp}
					onRequestClose={() => {
						setOpenModalTemp(false);
					}}
				>
					<ContainerInternoModal>
						<Text azul>Registre sua temperatura</Text>
						<InputModal value={temperatura} onChangeText={setTemperatura} />
						<Buttons onPress={navigate('Temperature', { temperatura })}>
							<ButtonText>Enviar Temperatura</ButtonText>
						</Buttons>
					</ContainerInternoModal>
				</Modal>
			</Container>
		</>
	);
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(Index);

const Container = styled.View`
	flex: 1;
	background-color: #f2f2f2;
	justify-content: center;
`;

const Text = styled.Text`
	font-size: 25px;
	color: ${(props) => (props.azul ? '#00456a' : '#ff6e62')};
	font-weight: bold;
`;

const ContainerInterno = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const ContainerInternoModal = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const ContainerText = styled.View`
	flex-direction: row;
`;

const TextYear = styled.Text`
	color: #00456a;
	font-weight: bold;
`;

const ContainerButtons = styled.View`
	margin-top: 60px;
`;

const InputModal = styled.TextInput`
	color: #fff;
	background-color: #00456a;
	width: 70%;
	padding: 10px;
	border-radius: 20px;
	text-align: center;
	font-size: 30px;
	margin-top: 20px;
`;

const Buttons = styled.TouchableOpacity`
	background-color: #00456a;
	padding: 10px 60px;
	margin: 10px;
	border-radius: 50px;
`;

const ButtonText = styled.Text`
	color: #fff;
	font-weight: bold;
	text-align: center;
`;
