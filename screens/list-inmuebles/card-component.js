/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function CardComponent(props){
    const {title, type,addess,rooms,price,area, _id} = props.inmueble;
    //console.log("navigate", props.navigate)
    const deleteInmueble = async () => {
      try {
          const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/deleteinmuebles', {
              method: 'DELETE',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  id: _id
              }),
          });
          const json = await response.json();
          Alert.alert("Inmueble deleted successfuly");
      } catch (error) {
        console.log("Error" + error);
      }
  }
    return(
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{type}</Text>
            <Text>{addess}</Text>
            <Text>{rooms}</Text>
            <Text>{price}</Text>
            <Text>{area}</Text>
            <Text>{_id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   
  });

export default CardComponent;