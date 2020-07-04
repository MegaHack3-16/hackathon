import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/authScreens/LoginScreen';
import SignUpScreen from '../../screens/authScreens/SignUpScreen';
import ForgotPassword from '../../screens/authScreens/ForgotPasswordScreen';
import WelcomeApp from '../../screens/InternalScreens/WelcomeScreen';
import InternalApp from '../InternalRoutes/index';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="LoginScreen" component={LoginScreen} />
		<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
		<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
		<Stack.Screen name="WelcomeApp" component={WelcomeApp} />
		<Stack.Screen name="InternalApp" component={InternalApp} />
	</Stack.Navigator>
);
