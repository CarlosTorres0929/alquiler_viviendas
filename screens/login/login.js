/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React,{useState} from 'react';
import { StyleSheet, 
  Text, View, Image, 
   Dimensions, Button,
  Alert } from 'react-native';
  import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

export default function Login({navigation}) {
  const iniciarSesion = () =>{navigation.navigate('ListInmuebles')};
  const registrarse = () =>{navigation.navigate('Create2')};
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./login.jpg')}/>
      <TextInput  style={styles.textInput} placeholder="Ingrese el correo" />
      <TextInput  style={styles.textInput} placeholder="Ingrese la contraseña" />
      <TouchableHighlight style={styles.loginButton} onPress={iniciarSesion}>
                <Text style={styles.textLoginButton}>Iniciar sesion</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.loginButton} onPress={registrarse}>
                <Text style={styles.textLoginButton}>Registrarse</Text>
            </TouchableHighlight>
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
