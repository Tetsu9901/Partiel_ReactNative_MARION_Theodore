import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const gameData = require("../data/data.json");

const Count = () => {
    const [count, setCount] = useState(gameData.length);
    
    const refreshCount = () => {
        setCount(gameData.length);
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.Btn}
                onPress={refreshCount}
            >
                <Text style={styles.text}>Refresh le nbr de jeux : {count} </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 15,
        marginTop: 30,
        marginRight: 20,
    }
});


export default Count;
