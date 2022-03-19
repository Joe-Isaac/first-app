import React from 'react';
import {useState, UseEffect} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import react from 'react';

const App = () => {
  const [style, setStyle] = useState('Basic style test');

  const sisi = () => {
    setStyle("StyleTest Updated");
  }
  
  return (
    <View style={styles.home}>
      <View style={styles.viewMain}>
        <View style={styles}>
        <Text style={styles.text}>{style}</Text>
        </View>
        <View style={styles}>
        <Text style={styles.text}>{style}</Text>
        </View>
        <View style={styles}>
        <Text style={styles.text}>{style}</Text>
        </View>
      </View>
      <View style={styles.viewSecond}>
        <View style={styles}>
        <Text style={styles.text}>{style}</Text>
        </View>
        <View style={styles}>
        <Text style={styles.text}>{style}</Text>
        </View>
      </View>
      <View style={styles.viewThird}>
          <View style={styles.view1}>
          <Text style={styles.text}>{style}</Text>
          </View>
          <View style={styles.view1}>
          <Text style={styles.text}>{style}</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 10,
  },

  view1: {
    width: 100,
    height: 100,
    backgroundColor: "grey",
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: "gold",
  },

  viewMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'grey',
  },

  viewSecond: {
    flexDirection: 'column',
    
  },

  viewThird: {
    flexDirection: 'row',
    
  },

  text: {
    fontSize: 16,
    color: "#000",
  }
});

export default App;