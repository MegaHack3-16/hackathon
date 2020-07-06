import React, { useCallback } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Header from '../../../../../components/Header';

import { Item } from '../../../../../components/Item';

const Home = ({
	nomeCompleto,
	constructionsList,
	navigation: { dispatch, navigate },
}) => {
	const primeiroNome = nomeCompleto.split(' ').slice(0, -1).join(' ');

	const [selected, setSelected] = React.useState(new Map());

	const onSelect = useCallback(
		(id) => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected]
	);

	return (
		<>
			<Container>
				<Header name={primeiroNome} dispatch={dispatch} />
				<StatusBar barStyle="light-content" backgroundColor="#00456a" />
				<ContainerObras>
					<Text>Minhas Obras</Text>
					<ContainerButtons>
						<Button onPress={() => alert('Devido ao tempo, não fizemos ainda')}>
							<TextButton>Adicionar Obra</TextButton>
						</Button>

						<Button
							laranja
							onPress={() => alert('Devido ao tempo, não fizemos ainda')}
						>
							<TextButton laranja>Remover Obra</TextButton>
						</Button>
					</ContainerButtons>
				</ContainerObras>
				<ContainerFlat>
					<FlatList
						data={constructionsList}
						renderItem={({ item }) => (
							<Item
								navigate={navigate}
								data={item}
								selected={!!selected.get(item.id)}
								onSelect={onSelect}
								setSelected={setSelected}
							/>
						)}
						keyExtractor={(item) => item.id}
						extraData={selected}
					/>
				</ContainerFlat>
			</Container>
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

export default connect(mapStateToProps, {})(Home);

const Container = styled.View`
	background-color: #f7f7f7;
	flex: 1;
	justify-content: center;
`;

const ContainerObras = styled.View`
	flex-direction: row;
	height: 150px;
	margin-top: 70px;
	justify-content: center;
	align-items: center;
`;

const ContainerFlat = styled.View`
	flex: 1;
	justify-content: flex-start;
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
