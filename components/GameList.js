import * as React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

const data = [
    {
        name: "Medal of Honor",
        price: "10€",
        catégorie: "FPS",
        id: 23124,
    },
    {
        name: "Street Fighter 2",
        price: "20€",
        catégorie: "Combat",
        id: 12349,
    },

    {
        name: "Call of Duty",
        price: "30€",
        catégorie: "FPS",
        id: 549762,
    },

    {
        name: "NBA2K5",
        price: "5€",
        catégorie: "Sport",
        id: 549763,
    },

    {
        name: "God Of War 2018",
        price: "25€",
        catégorie: "Action - Aventure",
        id: 549764,
    },

    {
        name: "The Legend of Zelda : The Wind Walker",
        price: "35€",
        catégorie: "Action - Aventure",
        id: 549765,
    },

    {
        name: "Horizon : Forbidden West",
        price: "40€",
        catégorie: "Action - Aventure",
        id: 549766,
    },

    {
        name: "Forza Horizon 5",
        price: "45€",
        catégorie: "Voiture",
        id: 549767,
    },

    {
        name: "The Last Of Us",
        price: "55€",
        catégorie: "Survival - horror",
        id: 549768,
    },

    {
        name: "Red Dead Redemption II",
        price: "18€",
        catégorie: "Action - Aventure",
        id: 549769,
    },
];

const GameList = () => {
    return (
        <View>
            <FlatList
                data={data}
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
