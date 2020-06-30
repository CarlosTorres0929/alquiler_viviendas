/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function CardComponent(props){
    const {nombre, apellido,email, _id} = props.user;
    //console.log("navigate", props.navigate)
    const deleteUser = async () => {
      try {
          const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/deleteuser', {
              method: 'delete',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id: _id
              }),
          });
          const json = await response.json();
          Alert.alert("User deleted successfuly");
      } catch (error) {
        console.log("Error" + error);
      }
  }
    return(
        <View style={styles.container}>
            <Text>{nombre} {apellido}</Text>
            <Text>{email}</Text>
            <Text>{_id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   
  });

export default CardComponent;