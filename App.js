import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
const App = () => {
  function haddlePress() {
    Alert.alert('Waiting for the World');
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Image
        source={require('./src/images/night.jpeg')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.title}>
        Relaxing Rhythms for
        <Text style={styles.highlight}> a Quiet Evening</Text>
      </Text>
      <Text style={styles.description}>Calm Melodies for a Busy Day</Text>
      <TouchableOpacity style={styles.button} onPress={haddlePress}>
        <Text style={styles.buttonText}>Find peace in every lofi beat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 700,
    color: '#ffffff',
    padding: 15,
    paddingTop: 10,
    letterSpacing: 3,
  },

  description: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 2,
    marginBottom: 10,
    paddingBottom: 10,
    color: '#ffffff',
  },

  button: {
    elevation: 3,
    backgroundColor: '#2A629A',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.7,
    backgroundColor: '#020101FF',
  },

  highlight: {
    color: '#E14D2A',
  },
});

export default App;
