import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeMainButton = props => {
  return (
    <View>
      <TouchableOpacity
        style={
          props.title === 'Kampanyalar'
            ? styles.buttonCampaigns
            : styles.buttonAddWallet
        }>
        <Text
          style={
            props.title === 'Kampanyalar'
              ? styles.buttonTextCampaigns
              : styles.buttonTextAddWallet
          }>
          {props.title}
        </Text>
        <Image source={props.imgUri} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeMainButton;

const styles = StyleSheet.create({
  buttonCampaigns: {
    flexDirection: 'row',
    width: (windowWidth * 8.5) / 10,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight * 1) / 10,
    elevation: 2,
    borderColor: '#2C2C58',
    borderWidth: 2,
  },
  buttonAddWallet: {
    flexDirection: 'row',
    width: (windowWidth * 8.5) / 10,
    borderRadius: 40,
    backgroundColor: '#2C2C58',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight * 1) / 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonTextCampaigns: {
    fontSize: 21,
    color: '#2C2C58',
    fontFamily: 'Roboto-Bold',
    width: (windowWidth * 6) / 10,
    textAlign: 'center',
  },
  buttonTextAddWallet: {
    fontSize: 21,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
    width: (windowWidth * 6) / 10,
    textAlign: 'center',
  },
});
