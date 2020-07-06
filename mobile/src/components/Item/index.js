import React from 'react';

import styled from 'styled-components';

export const Item = ({ data, selected, onSelect, setSelected, navigate }) => {
	return (
		<Container backgroundColor={data.backgroundColor}>
			<Title>{data.local}</Title>
			<Text>
				{data.rua}, {data.numero}
			</Text>
			<Text>
				{data.Estado} - {data.uf}
			</Text>

			<TextFunc>{data.funcionarios} funcinários trabalhando</TextFunc>
			<Text>Última higienização: {data.ultimaHigienizacao}</Text>

			<AccessButton
				onPress={() => {
					onSelect(data.id);
					navigate('Constructors', { data });
				}}
				buttonbackGroundColor={data.buttonbackGroundColor}
				selected={selected}
			>
				<Text>Acessar</Text>
			</AccessButton>
		</Container>
	);
};

const Container = styled.View`
	margin: 20px;
	padding: 30px;
	border-radius: 20px;
	background-color: ${(props) => props.backgroundColor};
`;

const Text = styled.Text`
	color: #fff;
`;

const Title = styled.Text`
	font-size: 25px;
	font-weight: bold;
	color: #fff;
`;

const TextFunc = styled.Text`
	margin-top: 20px;
	font-weight: bold;
	color: #fff;
`;

const AccessButton = styled.TouchableOpacity`
	padding: 10px;
	border-radius: 20px;
	background-color: ${(props) => props.buttonbackGroundColor};
	justify-content: center;
	align-items: center;
	margin: 20px 130px 0 0;
`;
