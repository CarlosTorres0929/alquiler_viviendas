/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function CreateInmueble({navigation}) {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [addess, setAddess] = useState("");
    const [rooms, setRooms] = useState("");
    const [price, setPrice] = useState("");
    const [area, setArea] = useState("");
    const createInmueble = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/createinmueble', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    type: type,
                    addess: addess,
                    rooms: rooms,
                    price: price,
                    area: area
                }),
            });
            const json = await response.json();
            Alert.alert("Inmueble created successfuly");
            navigation.navigate('ListInmuebles');
        } catch (error) {
            Alert.alert(error);
        }
    }
     return (
    <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Title" onChangeText={text => setTitle(text)}/>
            <TextInput style={styles.textInput} placeholder="Housing type" onChangeText={text => setType(text)}/>
            <TextInput style={styles.textInput} placeholder="Address" onChangeText={text => setAddess(text)}/>
            <TextInput style={styles.textInput} placeholder="Rooms" onChangeText={text => setRooms(text)}/>
            <TextInput style={styles.textInput} placeholder="Housing prices" onChangeText={text => setPrice(text)}/>
            <TextInput style={styles.textInput} placeholder="neighborhood" onChangeText={text => setArea(text)}/>
            <TouchableHighlight style={styles.createInmuebleButton} onPress={createInmueble}>
                <Text style={styles.textInmuebleButton}>Create Inmueble</Text>
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
    createInmuebleButton: {
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

export default CreateInmueble;