/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import CardComponent from './card-component';
import { useIsFocused } from '@react-navigation/native';

function ListInmuebles({ navigation }) {
  const isFocused = useIsFocused();
  const [inmuebles, setInmuebles] = useState([]);
   /* Data for the flatlist */
   const listInmuebles = async () =>{
    let response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/listinmuebles');
    let jsonResponse = await response.json();
    setInmuebles(jsonResponse.inmuebles);
}
const detailInmuebles = (item) =>{
  //console.log("id:" + id);
  navigation.navigate('DetailInmueble',{inmueble: item});
}
useEffect(()=>{
  console.log("isFocused: " + isFocused);
  listInmuebles();
},[isFocused]);
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.createInmuebleButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.createInmuebleButtonText}>List Users</Text>
         </TouchableHighlight>
        <TouchableHighlight style={styles.createInmuebleButton} onPress={() => navigation.navigate('CreateInmueble')}>
                <Text style={styles.createInmuebleButtonText}>Create Inmueble</Text>
         </TouchableHighlight>
         <FlatList
                data={inmuebles}
                renderItem={({ item }) => <TouchableHighlight style={styles.listButton} onPress = {() => detailInmuebles(item)}>
                    <CardComponent inmueble={item}/>
                </TouchableHighlight>}
                keyExtractor={item => item._id}
            >
            </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
createInmuebleButton: {
    backgroundColor: 'purple',
    padding: 20,
    alignItems: 'center',
},
createInmuebleButtonText: {
    color: 'white'
},
item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 32,
},
listButton: {
  padding: 20,
  borderColor: 'black',
  borderRadius: 5,
  borderWidth: 1,
  marginTop: 10,
  width: Dimensions.get('screen').width * 0.9,
},
});

export default ListInmuebles;