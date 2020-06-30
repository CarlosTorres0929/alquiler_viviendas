/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function UpdateInmueble({route,navigation}) {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [addess, setAddess] = useState("");
    const [rooms, setRooms] = useState("");
    const [price, setPrice] = useState("");
    const [area, setArea] = useState("");
    const updateInmueble = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/updateinmueble', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: route.params.inmueble.id,
                    title: title,
                    type: type,
                    addess: addess,
                    rooms: rooms,
                    price: price,
                    area: area

                }),
            });
            const json = await response.json();
            Alert.alert("Inmueble updated successfuly");
            navigation.navigate('ListInmuebles');
        } catch (error) {
            Alert.alert(error);
        }
    }
    useEffect(()=>{
        setTitle(route.params.inmueble.title);
        setType(route.params.inmueble.type);
        setAddess(route.params.inmueble.addess);
        setRooms(route.params.inmueble.rooms);
        setPrice(route.params.inmueble.price);
        setArea(route.params.inmueble.area);
      },[]);
     return (
    <View style={styles.container}>
           <TextInput style={styles.textInput} value={title} placeholder="Title" onChangeText={text => setTitle(text)}/>
            <TextInput style={styles.textInput} value={type} placeholder="Housing type" onChangeText={text => setType(text)}/>
            <TextInput style={styles.textInput} value={addess} placeholder="Address" onChangeText={text => setAddess(text)}/>
            <TextInput style={styles.textInput} value={rooms} placeholder="Rooms" onChangeText={text => setRooms(text)}/>
            <TextInput style={styles.textInput} value={price} placeholder="Housing prices" onChangeText={text => setPrice(text)}/>
            <TextInput style={styles.textInput} value={area} placeholder="neighborhood" onChangeText={text => setArea(text)}/>
            <TouchableHighlight style={styles.updateInmuebleButton} onPress={updateInmueble}>
                <Text style={styles.textInmuebleButton}>Update Inmueble</Text>
            </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    updateInmuebleButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textInmuebleButton: {
        color: 'white',
        fontSize: 16
    }
});

export default UpdateInmueble;