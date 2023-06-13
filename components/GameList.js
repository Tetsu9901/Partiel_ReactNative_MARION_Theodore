import * as React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const gameData = require("../data/data.json");


const GameList = () => {
    return (
        <View style={styles.container}>

        <FlatList
            data={gameData}
            renderItem={({ item }) => <Text style={styles.text}>{item.name} | {item.price}{"\n"} #{item.catégorie} </Text>}
            keyExtractor={(item) => item.id}
            style={styles.liste}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        maxHeight: "30%",
        alignItems: 'center',
        justifyContent: 'center',
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
