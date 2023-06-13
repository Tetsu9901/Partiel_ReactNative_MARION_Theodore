import * as React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const gameData = require("../data/data.json");


const GameList = () => {
    return (
        <View>
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
    liste: {
        marginTop: 20,
        backgroundColor: "#ffe9ec",
        width: "90%",
        maxHeight: "70%",
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        color: "black",
        textAlign: "center",
        marginTop: 30,
    },


});

export default GameList;
