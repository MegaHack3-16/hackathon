import React from 'react';
import { StatusBar } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from '../../../../../components/Header';

const Index = ({ navigation: { navigate, dispatch, goBack }, route }) => {
	const data = [36.2, 36, 36.5, 37.0, 37.6];

	return (
		<>
			<Container>
				<Header laranja dispatch={dispatch} goBack={goBack} />
				<StatusBar barStyle="light-content" backgroundColor="#ff6e62" />
				<Text>Atenção! Joaquim está apresntando sintomas preocupantes </Text>
				<LineChart
					style={{ height: 300 }}
					data={data}
					svg={{ stroke: 'rgb(134, 65, 244)' }}
					contentInset={{ top: 20, bottom: 20 }}
				>
					<Grid />
				</LineChart>
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
	font-size: 21px;
	color: #00456a;
	font-weight: bold;
	text-align: center;
`;
