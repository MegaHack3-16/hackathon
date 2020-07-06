import React from 'react';

import styled from 'styled-components';

export default () => (
	<>
		<Page>
			<Scroll>
				<CardWrapper Color="#FC6D61">
					<IconWrapper Color="#F7F7F7">
						<Icon source={require('../../../../../assets/thunder.png')} />
					</IconWrapper>
					<TeamWrapper>
						<Title Color="#F7F7F7">Elétrica</Title>
						<Members Color="#F7F7F7">5 membros</Members>
					</TeamWrapper>
					<Icon source={require('../../../../../assets/whiteArrow.png')} />
				</CardWrapper>

				<CardWrapper Color="#F7F7F7">
					<IconWrapper Color="#FC6D61 ">
						<Icon source={require('../../../../../assets/cement.png')} />
					</IconWrapper>
					<TeamWrapper>
						<Title Color="#FC6D61">Civil</Title>
						<Members Color="#FC6D61">15 membros</Members>
					</TeamWrapper>
					<Icon source={require('../../../../../assets/orangeArrow.png')} />
				</CardWrapper>

				<CardWrapper Color="#FC6D61">
					<IconWrapper Color="#F7F7F7">
						<Icon source={require('../../../../../assets/wood.png')} />
					</IconWrapper>
					<TeamWrapper>
						<Title Color="#F7F7F7">Marcenaria</Title>
						<Members Color="#F7F7F7">3 membros</Members>
					</TeamWrapper>
					<Icon source={require('../../../../../assets/whiteArrow.png')} />
				</CardWrapper>

				<CardWrapper Color="#F7F7F7">
					<IconWrapper Color="#FC6D61 ">
						<Icon source={require('../../../../../assets/water.png')} />
					</IconWrapper>
					<TeamWrapper>
						<Title Color="#FC6D61">Hidráulica</Title>
						<Members Color="#FC6D61">6 membros</Members>
					</TeamWrapper>
					<Icon source={require('../../../../../assets/orangeArrow.png')} />
				</CardWrapper>
			</Scroll>
			<Button Color="#FC6D61">
				<Title Color="#F7F7F7">Adicionar</Title>
			</Button>
		</Page>
	</>
);

const Page = styled.View`
	flex: 1;
	justify-content: center;
	background-color: #00456a;
`;

const Scroll = styled.ScrollView`
	flex: 1;
`;

const CardWrapper = styled.TouchableOpacity`
	margin: 10px;
	padding: 20px;
	border-radius: 20px;
	background-color: ${(props) => props.Color};
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const IconWrapper = styled.View`
	padding: 10px;
	border-radius: 10px;
	border: 1px solid ${(props) => props.Color};
	display: flex;
	align-items: center;
	width: 60px;
	height: 60px;
	margin-right: 5px;
`;

const TeamWrapper = styled.View`
	display: flex;
	flex: 1;
`;

const Title = styled.Text`
	color: ${(props) => props.Color};
	font-size: 20px;
`;

const Members = styled.Text`
	color: ${(props) => props.Color};
	font-size: 14px;
`;

const Icon = styled.Image`
	width: 40px;
	height: 40px;
`;

const Button = styled.View`
	height: 42px;
	width: 150px;
	background-color: ${(props) => props.Color};
	margin-bottom: 10px;
	padding: 5px;
	border-radius: 10px;
	align-items: center;
`;
