import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import styled from 'styled-components';
import Header from '../../../../../components/Header';

const SelecionarEquipe = ({ navigation: { navigate, dispatch, goBack } }) => {
	const [checkin, setCheckin] = useState('Elétrica');

	return (
		<>
			<Container>
				<Header checkin dispatch={dispatch} goBack={goBack} />
				<StatusBar barStyle="light-content" backgroundColor="#ff6e62" />
				<Text>Selecione uma equipe</Text>
				<ContainerPicker>
					<Picker
						selectedValue={checkin}
						onValueChange={(itemValue) => {
							setCheckin(itemValue);
							navigate('Funcionarios');
						}}
						style={{
							color: '#fff',
							backgroundColor: '#00456a',
							borderRadius: 40,
						}}
					>
						<Picker.Item label="Elétrica" value="Elétrica" />
						<Picker.Item label="Civil" value="Civil" />
						<Picker.Item label="Marcenaria" value="Marcenaria" />
						<Picker.Item label="Hidráulica" value="Hidráulica" />
					</Picker>
				</ContainerPicker>
			</Container>
		</>
	);
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(SelecionarEquipe);

const Container = styled.View`
	flex: 1;
	background-color: #ff6e62;
	justify-content: center;
`;

const ContainerPicker = styled.View`
	flex: 2;
	margin: 0 60px 60px 60px;
`;

const Text = styled.Text`
	margin-left: 60px;
	color: #f2f2f2;
	font-size: 18px;
`;
