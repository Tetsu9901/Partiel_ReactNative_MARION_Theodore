import * as React from "react";
import { FlatList, Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const gameData = require("../data/data.json");

// J'ai essayé de faire un filtre par catégorie en utilisant la fonction filterListByCat(cat) mais je n'ai pas réussi à l'implémenter dans le code.

const filterListByCat = (cat) => {
    return gameData.filter((game) => game.catégorie === cat);
};


const GameList = () => {

    const [cat, setCat] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Catégorie du jeu"
                onChangeText={(text) => setCat(text)}
                value={cat}
            />
            <TouchableOpacity
                style={styles.Btn}
                onPress={() => filterListByCat(cat)}
            >
                <Text style={{fontSize:20, color:"white"}}>Filtrer par catégorie</Text>
            </TouchableOpacity>
            <FlatList
                data={gameData}
                renderItem={({ item }) => <Text style={styles.text}>{item.name} | {item.price}{"\n"} #{item.catégorie} </Text> }
                keyExtractor={(item) => item.id}
                style={styles.liste}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        maxHeight: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    Btn: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
        marginTop: 1,
        marginBottom: 10,
        width: "100%",
        alignItems: "center",
    },
    liste: {
        backgroundColor: "white",
        flexGrow: 0,
        width: 390,
        maxHeight: "90%",
        borderRadius: 10,
    },
    text: {
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        color: "black",
        textAlign: "center",
        marginTop: 30,
    },


});

export default GameList;
