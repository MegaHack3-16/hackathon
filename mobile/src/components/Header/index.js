import React from 'react';
import styled from 'styled-components';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ name, dispatch }) => (
	<Container>
		<WelcomeMessage> Olá, {name} </WelcomeMessage>
		<ContainerIcon onPress={() => dispatch(DrawerActions.openDrawer())}>
			<Icon name="navicon" size={30} color="#fff" />
		</ContainerIcon>
	</Container>
);

const Container = styled.View`
	position: absolute;
	top: 0;
	width: 100%;
	justify-content: center;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	background-color: #00456a;
	flex-direction: row;
`;

const WelcomeMessage = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 25px;
	margin: 20px 0 30px 0;
	text-align: center;
`;

const ContainerIcon = styled.TouchableOpacity`
	position: absolute;
	right: 20px;
	top: 20px;
`;
