import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import LoginInput from '../components/LoginInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Giriş Yapın</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../assets/alternative-img.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <LoginInput title="number" imgUri={require('../assets/phone-iphone.png')} />
        <LoginInput title="password" imgUri={require('../assets/lock.png')} />
      </View>
      <View style={styles.passwordContainer}>
        <Text style={{fontFamily: 'Roboto-Regular'}}>Şifremi Unuttum</Text>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 10,
    borderColor: '#F7F7F7',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  imgContainer: {
    width: windowWidth,
    height: windowHeight / 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  img: {
    width: windowWidth / 3,
    height: 55,
  },
  inputContainer: {
    width: windowWidth,
    marginVertical: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  passwordContainer: {
    width: windowWidth,
    alignItems: 'center',
    marginVertical: 20,
  },
  passwordText: {
    fontSize: 12,
  },
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    width: (windowWidth * 8.5) / 10,
    borderRadius: 40,
    backgroundColor: '#2C2C58',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight * 1) / 10,
    elevation: 2,
  },
  buttonText: {
    fontSize: 21,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
  },
});
