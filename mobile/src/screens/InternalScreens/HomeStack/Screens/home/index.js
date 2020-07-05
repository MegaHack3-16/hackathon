import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../../../../components/Header';

const Home = ({ nomeCompleto, navigation: { dispatch } }) => {
	const primeiroNome = nomeCompleto.split(' ').slice(0, -1).join(' ');

	const Obras = [
		{
			key: 1,
			endereco: 'Avenida da Hortência, 354',
			cidade: 'Porto Alegre - RS',
			funcionários: '15 funcionários trabalhando',
			higienizacao: '4 horas atrás',
		},
	];

	return (
		<>
			<Container>
				<Header name={primeiroNome} dispatch={dispatch} />
				<ContainerObras>
					<Text>Minhas Obras</Text>
					<ContainerButtons>
						<Button>
							<TextButton>Adicionar Obra</TextButton>
						</Button>

						<Button laranja>
							<TextButton laranja>Remover Obra</TextButton>
						</Button>
					</ContainerButtons>
				</ContainerObras>
			</Container>
		</>
	);
};

Home.propTypes = {
	nomeCompleto: PropTypes.string.isRequired,
	navigation: PropTypes.shape({
		dispatch: PropTypes.func.isRequired,
	}).isRequired,
};

const mapDispatchToProps = {};

const mapStateToProps = ({ auth: { nomeCompleto } }) => ({ nomeCompleto });

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.View`
	background-color: #f7f7f7;
	flex: 1;
	justify-content: center;
`;

const ContainerObras = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text`
	font-size: 25px;
	color: #00456a;
	font-weight: bold;
	margin-left: 30px;
`;

const ContainerButtons = styled.View`
	margin-left: 20px;
	flex-direction: column;
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) => (props.laranja ? 'transparent' : '#00456a')};
	border: ${(props) => (props.laranja ? '2px solid #FF6E62' : '0')};
	border-radius: 20px;
	margin: 10px 0 0 0;
	padding: 10px 20px 10px 20px;
`;

const TextButton = styled.Text`
	font-weight: bold;
	font-size: 20px;
	color: ${(props) => (props.laranja ? '#FF6E62' : '#f2f2f2')};
`;
