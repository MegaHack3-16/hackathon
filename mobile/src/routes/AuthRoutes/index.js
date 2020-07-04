import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/authScreens/LoginScreen';
import SignUpScreen from '../../screens/authScreens/SignUpScreen';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
	</Stack.Navigator>
);
