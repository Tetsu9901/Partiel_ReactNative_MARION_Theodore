import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import GameList from './components/GameList';
import FormAddGame from './components/FormAddGame';
import MyHeader from './components/Header';
import Count from './components/compter';

export default function App() {
  const gameData = require("./data/data.json");
  return (
    <View style={styles.container}>
      <MyHeader />
      <GameList />
      <FormAddGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#EFDCF9',
    alignItems: 'center',
  },
});
