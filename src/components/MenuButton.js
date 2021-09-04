import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MenuButton = props => {
  console.log(props);
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[
          props.title === 'CÜZDANLAR'
            ? styles.activeImgContainer
            : styles.imgContainer,
        ]}>
        <Image style={styles.img} source={props.imgUri} />
      </View>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 5,
    height: 100,
    alignItems: 'center',
  },
  imgContainer: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  activeImgContainer: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: '#2C2C58',
    elevation: 4,
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    marginTop: 5,
  },
});
