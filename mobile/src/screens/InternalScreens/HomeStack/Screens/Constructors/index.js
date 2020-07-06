import React, { useCallback } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components';
import Header from '../../../../../components/Header';

import { Item } from '../../../../../components/Item';

const Constructors = ({
	nomeCompleto,
	constructionsList,
	navigation: { navigate, dispatch, goBack },
	route,
}) => {
	const { data } = route.params;

	const date = new Date();

	const diaAtual = date.getDate();

	const mesAtual = date.getMonth();

	const dataAtual = `< Hoje ${diaAtual}/${mesAtual} >`;

	return (
		<>
			<ScrollView>
				<Container>
					<Header back dispatch={dispatch} goBack={goBack} />
					<StatusBar barStyle="light-content" backgroundColor="#00456a" />

					<ContainerText>
						<Text>{data.local}</Text>
						<TextData> {dataAtual} </TextData>
					</ContainerText>
					<ContainerContentCheck>
						<TextCheck>Check-in: 15/16 funcionários</TextCheck>
						<SubTextCheck>
							Último check-in realizado: José Francisco
						</SubTextCheck>
						<Button laranja onPress={() => navigate('SelecionarEquipe')}>
							<TextButton>Fazer check-in</TextButton>
						</Button>

						<TextCheck>Check-out: 1/10 funcionários</TextCheck>
						<SubTextCheck>
							Último check-out realizado: Mario Andrade
						</SubTextCheck>
						<Button>
							<TextButton>Fazer check-out</TextButton>
						</Button>
					</ContainerContentCheck>

					<ContainerButtons>
						<ButtonTimes>
							<Icon name="group" size={20} color="#f2f2f2" />
							<TextTimes>Equipes</TextTimes>
						</ButtonTimes>

						<ButtonTimes>
							<Icon name="group" size={20} color="#f2f2f2" />
							<TextTimes>Alarmes</TextTimes>
						</ButtonTimes>
					</ContainerButtons>

					<ContainerTarefas>
						<ContainerMenuTarefas>
							<TextTarefas>Tarefas do dia</TextTarefas>
							<ContainerIconPlus>
								<Icon name="plus" color="#FF6E62" size={20} />
							</ContainerIconPlus>
							<ContainerCogIcon>
								<Icon name="cogs" color="#f2f2f2" size={30} />
							</ContainerCogIcon>
						</ContainerMenuTarefas>

						<ItemsTarefas>
							<TextItemTarefas>Higienizar Refeitório</TextItemTarefas>
							<ContainerOK>
								<TextOK>OK</TextOK>
							</ContainerOK>
						</ItemsTarefas>
						<ItemsTarefas>
							<TextItemTarefas>Higienizar Banheiros</TextItemTarefas>
							<ContainerOK>
								<TextOK>OK</TextOK>
							</ContainerOK>
						</ItemsTarefas>
						<ItemsTarefas>
							<TextItemTarefas>
								Desinfectar Óculos de Proteção nº7
							</TextItemTarefas>
							<ContainerOK>
								<TextOK>OK</TextOK>
							</ContainerOK>
						</ItemsTarefas>
					</ContainerTarefas>
				</Container>
			</ScrollView>
		</>
	);
};

const mapStateToProps = ({
	auth: { nomeCompleto },
	internal: { constructionsList },
}) => ({
	nomeCompleto,
	constructionsList,
});

export default connect(mapStateToProps, {})(Constructors);

const Container = styled.View`
	flex: 1;
	justify-content: center;
`;

const ContainerText = styled.View`
	background-color: #00456a;
	height: 100px;
	elevation: 2;
	border-radius: 20px;
	margin: 0 20px;
	justify-content: center;
	align-items: center;
`;

const TextData = styled.Text`
	color: #f2f2f2;
	font-size: 22px;
`;

const Text = styled.Text`
	font-size: 25px;
	color: #f2f2f2;
	font-weight: bold;
`;

const ContainerContentCheck = styled.View`
	margin: 0 20px;
	z-index: -5;
	elevation: 2;
	top: -20px;
	border-radius: 40px;
	background-color: #efefef;
	justify-content: center;
	align-items: center;
`;

const TextCheck = styled.Text`
	color: #00456a;
	font-weight: bold;
	font-size: 23px;
	margin-top: 50px;
`;

const SubTextCheck = styled.Text`
	color: #00456a;
	font-size: 15px;
`;

const Button = styled.TouchableOpacity`
	margin-top: 10px;
	border-radius: 40px;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	background-color: ${(props) => (props.laranja ? '#FF6E62' : '#00456a')};
	margin-bottom: ${(props) => (props.laranja ? '0' : '40px')};
`;

const TextButton = styled.Text`
	color: #fff;
	text-align: center;
	font-size: 25px;
	font-weight: bold;
	padding: 15px;
`;

const ButtonTimes = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 20px;
	border-radius: 20px;
	background-color: #00456a;
	flex-direction: row;
`;

const TextTimes = styled.Text`
	color: #f2f2f2;
	margin-left: 15px;
	font-weight: bold;
	font-size: 22px;
`;

const ContainerButtons = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const ContainerIconPlus = styled.TouchableOpacity`
	background-color: #f2f2f2;
	border-radius: 40px;
	padding: 10px 12px 10px 12px;
`;

const ContainerTarefas = styled.View`
	background-color: #ff6e62;
	border-radius: 20px;
	margin: 10px 20px;
	padding: 20px;
`;

const ContainerMenuTarefas = styled.View`
	flex-direction: row;
	margin-left: 10px;
	align-items: center;
`;

const ContainerCogIcon = styled.TouchableOpacity`
	position: absolute;
	right: 0;
	border-radius: 40px;
	padding: 10px 12px 10px 12px;
`;

const TextTarefas = styled.Text`
	font-size: 20px;
	margin-right: 15px;
	font-weight: bold;
	text-align: center;
	color: #f2f2f2;
`;

const ItemsTarefas = styled.View`
	flex-direction: row;
	margin: 20px 10px 0 10px;
	justify-content: space-between;
`;

const TextItemTarefas = styled.Text`
	font-weight: bold;
	font-size: 14px;
	color: #f2f2f2;
`;

const ContainerOK = styled.TouchableOpacity`
	background-color: #00456a;
	padding: 5px 7px;
	border-radius: 5px;
`;

const TextOK = styled.Text`
	color: #fff;
`;
