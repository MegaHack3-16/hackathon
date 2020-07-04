import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';

export default () => (
	<>
		<StatusBar barStyle="light-content" backgroundColor="#FF6E62" />
		<Text>hello</Text>
	</>
);

const Text = styled.Text``;
