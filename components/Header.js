import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GameList from './GameList';
import Count from './compter';

const MyHeader = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.pseudo}>Tetsu9901</Text>
            <Count />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        width: "100%",
        maxHeight: "25%",
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pseudo: {
        marginTop: 30,
        color: "white",
        fontSize: 20,
        marginLeft: 20,
    },
    text: {
        color: "white",
        fontSize: 15,
        marginTop: 30,
        marginRight: 20,
    }
});

export default MyHeader;