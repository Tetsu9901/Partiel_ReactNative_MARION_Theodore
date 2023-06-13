import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import GameList from './components/GameList';
import FormAddGame from './components/FormAddGame';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameList />
      <FormAddGame />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#EFDCF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
