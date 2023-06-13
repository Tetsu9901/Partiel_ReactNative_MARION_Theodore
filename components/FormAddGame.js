import * as React from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AddGameBtn from './AddGameBtn';
import { useState } from "react";

const gameData = require("../data/data.json");

function FormAddGame() {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cat, setCat] = useState("");

    const clearInput = () => {
        setName("");
        setPrice("");
        setCat("");
    };

    return (
        <View style={styles.form}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>Ajouter un jeu</Text>
            <Text>Nom du jeu</Text>
            <TextInput
                style = {styles.input}
                placeholder="Nom du jeu"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text>Prix du jeu</Text>
            <TextInput
                style = {styles.input}
                placeholder="Prix du jeu"
                onChangeText={(text) => setPrice(text)}
                value={price}
            />
            <Text>Catégorie du jeu</Text>
            <TextInput
                style = {styles.input}
                placeholder="Catégorie du jeu"
                onChangeText={(text) => setCat(text)}
                value={cat}
            />
            <AddGameBtn name={name} price={price+'€'} cat={cat} clear={clearInput}/>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: "white",
        width: 390,
        borderRadius: 10,
        alignItems: "center",
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    }

});


export default FormAddGame;