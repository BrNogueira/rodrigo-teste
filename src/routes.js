import React from 'react';
import { Router, Scene} from 'react-native-router-flux';

import login from './screns/login.js'
import cadastro from './screns/cadastro.js'

export default props => (
	<Router>
		<Scene key='login' component={login} title="Login" />
		<Scene key='cadastro' component={cadastro} title="Cadastro" />
	</Router>
	);
