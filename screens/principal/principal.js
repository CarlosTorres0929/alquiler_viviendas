/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React,{useState} from 'react';
import { StyleSheet, 
  Text, View, Image, 
   Dimensions, Button,
  Alert } from 'react-native';
  import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

export default function Principal({navigation}) {
  const iniciarSesion = () =>{navigation.navigate('Login')};
  return (
    <View style={styles.container}>
         <TouchableHighlight style={styles.loginButton} onPress={iniciarSesion}>
                <Text style={styles.textLoginButton}>Iniciar sesion</Text>
            </TouchableHighlight>
      <Image style={styles.logo} source={require('./apart.jpg')}/>
      <Image style={styles.logo} source={require('./apart2.jpg')}/>
      <Image style={styles.logo} source={require('./casa1.jpg')}/>
      <Image style={styles.logo} source={require('./casa2.jpg')}/>
      <Image style={styles.logo} source={require('./casa3.jpg')}/>
      <Image style={styles.logo} source={require('./picina.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 200
  },
  textInput: {
    padding: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    width: Dimensions.get('screen').width * 0.9
  },
  loginButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'purple',
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.9,
    alignItems: 'center'
},
textLoginButton: {
    color: 'white',
    fontSize: 16
}
});
