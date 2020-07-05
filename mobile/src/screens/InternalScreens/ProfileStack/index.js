import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './Stack/Profile';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator>
		<Stack.Screen name="Profile" component={Profile} />
	</Stack.Navigator>
);
