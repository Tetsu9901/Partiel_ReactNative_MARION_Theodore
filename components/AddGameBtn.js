import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const gameData = require("../data/data.json");


function AddGameBtn({ name, price, cat, clear }) {

    const addGame = () => {
        const newGame = {
            id: gameData.length + 1,
            name: name,
            price: price,
            catégorie: cat,
        };
        gameData.push(newGame);
        console.log(gameData);
        clear();
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.Btn}
                onPress={addGame}
            >
                <Text style={{ color: "white", fontSize: 20 }}>Ajouter un jeu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: "#FF6B6B",
        padding: 10,
        borderRadius: 10,
        marginTop: 1,
        marginBottom: 10,
        width: "100%",
        alignItems: "center",
    }
});

export default AddGameBtn;
