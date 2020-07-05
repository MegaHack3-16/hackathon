import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Infos from './Screens/Infos';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Infos" component={Infos} />
	</Stack.Navigator>
);
