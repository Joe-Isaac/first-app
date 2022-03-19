import React from 'react';
import {useState, UseEffect} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import react from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  const sisi = () => {
    setCount(count + 1);
    setIncrement(increment + 5);
  }
  
  return (
    <View style={styles.home}>
      <Text style={styles.text}>{increment}</Text>
      <Button onPress={sisi}style={styles.button} title="My button"></Button>
      <Text style={styles.text}>You clicked {count} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "white",

  },
  content: {
    fontStyle: 'italic',
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontStyle: 'italic',
  }
});

export default App;