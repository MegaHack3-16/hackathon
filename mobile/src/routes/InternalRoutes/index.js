import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/InternalScreens/HomeScreen';
import ProfileScreen from '../../screens/InternalScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default () => (
	<Tab.Navigator
		tabBarOptions={{
			activeBackgroundColor: '#FF6E62',
			activeTintColor: '#f2f2f2',
			labelStyle: {
				textAlign: 'center',
			},
			keyboardHidesTabBar: true,
			inactiveTintColor: 'gray',
		}}
	>
		<Tab.Screen name="Home" component={HomeScreen} />
		<Tab.Screen name="Profile" component={ProfileScreen} />
	</Tab.Navigator>
);
