import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const clearData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <View>
      <Text style={{fontSize: 40}}>User Details Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
      />

      <View style={{marginBottom: 10}}>
        <Button title="Submit" onPress={() => setDisplay(true)} />
      </View>
      <Button color={'green'} title="Clear" onPress={clearData} />

      <View>
        {display ? (
          <View>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
    padding: 10,
  },
});
