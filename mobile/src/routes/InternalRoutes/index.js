import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from '../../screens/InternalScreens/HomeStack';
import SignOut from '../../screens/InternalScreens/ProfileStack';

const Drawer = createDrawerNavigator();

export default () => (
	<Drawer.Navigator>
		<Drawer.Screen name="Home" component={HomeStack} />
		<Drawer.Screen name="SignOut" component={SignOut} />
	</Drawer.Navigator>
);
