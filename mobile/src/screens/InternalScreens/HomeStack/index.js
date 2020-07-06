import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import Constructors from './Screens/Constructors';
import SelecionarComponente from './Screens/SelecionarEquipe';
import Funcionarios from './Screens/Funcionarios';
import InfosFuncionario from './Screens/InfosFuncionario';
import Temperature from './Screens/Temperature';

const Stack = createStackNavigator();

export default () => (
	<Stack.Navigator headerMode="none">
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Constructors" component={Constructors} />
		<Stack.Screen name="Funcionarios" component={Funcionarios} />
		<Stack.Screen name="SelecionarEquipe" component={SelecionarComponente} />
		<Stack.Screen name="InfosFuncionario" component={InfosFuncionario} />
		<Stack.Screen name="Temperature" component={Temperature} />
	</Stack.Navigator>
);
