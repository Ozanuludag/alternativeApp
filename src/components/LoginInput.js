import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const LoginInput = props => {
  return (
    <View style={props.title === 'number' ? styles.numberSection : styles.passwordSection}>
      <Image style={styles.iconSize} source={props.imgUri} />
      <TextInput
        secureTextEntry={props.title === 'password' ? true : false}
        style={styles.input}
        placeholder={(props.title === 'number' ? '5xx xxx xx xx' : '******')}
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  numberSection: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 20,
  },
  passwordSection: {
    flexDirection: 'row',
    height: 75,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 20,
  },
  iconSize: {
    width: 20,
    height: 30,
    margin: 10,
  },
  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    width: (windowWidth * 8) / 10,
    fontSize: 16,
  },
});
