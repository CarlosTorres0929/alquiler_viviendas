/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function DetailInmuebles({route,navigation}) {
    const {id, title, type, addess, rooms, price,area} = route.params.inmueble;
    const deleteInmueble = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/deleteinmuebles', {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id
                }),
            });
            const json = await response.json();
            Alert.alert("Inmueble deleted successfuly");
            navigation.navigate('ListInmuebles');
        } catch (error) {
            console.log("error:" + error);
        }
    }
    const updateInmueble = () =>{
        navigation.navigate('UpdateInmueble', {inmueble: route.params.inmueble})
    }
    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
            <Text>Title: {title}</Text>
            <Text>Housing Type: {type}</Text>
            <Text>Adress: {addess}</Text>
            <Text>Rooms: {rooms}</Text>
            <Text>Housing Price: {price}</Text>
            <Text>Neighborhood: {area}</Text>
            <View style={styles.buttonView}>
            <TouchableHighlight style={styles.editInmuebleButton} onPress={updateInmueble}>
                <Text style={styles.textInmuebleButton}>Edit Inmueble</Text>
            </TouchableHighlight>
            </View>
            <View style={styles.buttonView}>
            <TouchableHighlight style={styles.deleteInmuebleButton} onPress={deleteInmueble}>
                <Text style={styles.textInmuebleButton}>Delete Inmueble</Text>
            </TouchableHighlight>
            </View>
            </View>
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
    deleteInmuebleButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.5,
        alignItems: 'center'
    },
    editInmuebleButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.5,
        alignItems: 'center'
    },
    detailCard: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
    },
    textInmuebleButton: {
        color: 'white',
        fontSize: 16
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
export default DetailInmuebles;