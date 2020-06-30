/*Author: Carlos Torres
  Email: ct059489@gmail.com*/
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function DetailUser({route,navigation}) {
    const {id, nombre, apellido, email} = route.params.user;
    const deleteUser = async () => {
        try {
            const response = await fetch('https://us-central1-alquiler-viviendas-airtorres.cloudfunctions.net/api/deleteuser', {
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
            Alert.alert("User deleted successfuly");
            navigation.navigate('Home');
        } catch (error) {
            console.log("error:" + error);
        }
    }
    const updateUser = () =>{
        navigation.navigate('Update', {user: route.params.user})
    }
    return (
        <View style={styles.container}>
            <View style={styles.detailCard}>
            <Text>Nombre: {nombre} {apellido}</Text>
            <Text>Correo: {email}</Text>
            <View style={styles.buttonView}>
            <TouchableHighlight style={styles.editUserButton} onPress={updateUser}>
                <Text style={styles.textUserButton}>Edit User</Text>
            </TouchableHighlight>
            </View>
            <View style={styles.buttonView}>
            <TouchableHighlight style={styles.deleteUserButton} onPress={deleteUser}>
                <Text style={styles.textUserButton}>Delete User</Text>
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
    deleteUserButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.5,
        alignItems: 'center'
    },
    editUserButton: {
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
    textUserButton: {
        color: 'white',
        fontSize: 16
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
export default DetailUser;