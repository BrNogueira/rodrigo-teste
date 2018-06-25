import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center' }}>
			<TextInput placeholder='nome' />
			<TextInput placeholder='email' />
			<TextInput placeholder='Senha' />
			</View>
			<View stile={{ flex: 1  }}> 
 	        <Button title="Cadastrar" color="#115E54" onPress={() => false} />
	</View>
	
	);