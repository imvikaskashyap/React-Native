import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> React Cards </Text>

        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text> Card 1 </Text>
          </View>
          <View style={[styles.card, styles.cardtwo]}>
            <Text> Card 2 </Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text> Card 3 </Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text> Card 4 </Text>
          </View>
          <View style={[styles.card, styles.cardtwo]}>
            <Text> Card 2 </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
      flex:1,
    justifyContent:"center",
    alignItems:"center",
    width: 100,
    height: 100,
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderRadius:4,
  
  },
  cardOne: {
    backgroundColor: 'blue',
  },
  cardtwo: {
    backgroundColor: 'red',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  cardFour: {
    backgroundColor: 'yellow',
  },
});
