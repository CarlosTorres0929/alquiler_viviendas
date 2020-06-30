/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import CardComponent from './card-component';
import { useIsFocused } from '@react-navigation/native';

function ListUsers({ navigation }) {
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);
   /* Data for the flatlist */
   const listUsers = async () =>{
    let response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/listusers');
    let jsonResponse = await response.json();
    setUsers(jsonResponse.users);
}
const detailUser = (item) =>{
  //console.log("id:" + id);
  navigation.navigate('Detail',{user: item});
}
useEffect(()=>{
  console.log("isFocused: " + isFocused);
  listUsers();
},[isFocused]);
  return (
    <View style={styles.container}>
        <TouchableHighlight style={styles.createUserButton} onPress={() => navigation.navigate('Create')}>
                <Text style={styles.createUserButtonText}>Create User</Text>
         </TouchableHighlight>
         <FlatList
                data={users}
                renderItem={({ item }) => <TouchableHighlight style={styles.listButton} onPress = {() => detailUser(item)}>
                    <CardComponent user={item}/>
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
createUserButton: {
    backgroundColor: 'purple',
    padding: 20,
    alignItems: 'center',
},
createUserButtonText: {
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

export default ListUsers;