import React, { useState, useRef } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import styled from 'styled-components';
import Header from '../../../../../components/Header';
import DropdownAlertCustom from '../../../../../components/DropdownAlert';

const Index = ({ navigation: { navigate, dispatch, goBack } }) => {
	const [checkin, setCheckin] = useState('Select');

	let notification = useRef('null');

	return (
		<>
			<Container>
				<Header checkin dispatch={dispatch} goBack={goBack} />
				<StatusBar barStyle="light-content" backgroundColor="#00456a" />
				<Text>Selecione um Funcionário</Text>
				<ContainerPicker>
					<Picker
						selectedValue={checkin}
						onValueChange={(itemValue) => {
							setCheckin(itemValue);
							if (itemValue === 'Select') {
								notification.alertWithType(
									'info',
									'Informação',
									'Selecione uma informação válida'
								);
							} else {
								navigate('InfosFuncionario', { itemValue });
							}
						}}
						style={{
							color: '#fff',
							backgroundColor: '#ff6e62',
							borderRadius: 20,
						}}
					>
						<Picker.Item label="Selecione um Funcionário" value="Select" />
						<Picker.Item label="Joaquim Lopez" value="Joaquim Lopez" />
						<Picker.Item label="José Francisco" value="José Francisco" />
					</Picker>
				</ContainerPicker>
				<DropdownAlertCustom
					paramRef={(ref) => {
						notification = ref;
					}}
					color="#00456a"
					inactiveStatusBarStyle="light-content"
				/>
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

export default connect(mapStateToProps, {})(Index);

const Container = styled.View`
	flex: 1;
	background-color: #00456a;
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
