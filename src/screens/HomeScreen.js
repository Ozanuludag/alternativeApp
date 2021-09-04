import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import HomeMainButton from '../components/HomeMainButton';
import MenuButton from '../components/MenuButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={styles.iconSize}
            source={require('../assets/menu-icon.png')}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Cüzdanlar</Text>
        <Image style={styles.iconSize} source={require('../assets/bell.png')} />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Image
            style={styles.iconSize}
            source={require('../assets/search.png')}
          />
          <TextInput maxLength={20} style={styles.input} placeholder="Cüzdan Ara..." />
        </View>
        <View style={styles.allWallets}>
          <Text style={styles.allWalletsText}>TÜM CÜZDANLAR</Text>
          <Image
            style={styles.iconSize}
            source={require('../assets/filter.png')}
          />
        </View>
      </View>
      <View style={styles.ellipseBackground}>
        <Image
          style={styles.laginaImg}
          source={require('../assets/lagina-img.png')}
        />
      </View>
      <Image style={styles.starsImg} source={require('../assets/stars.png')} />
      <View style={styles.buttonsContainer}>
        <HomeMainButton
          title="Kampanyalar"
          imgUri={require('../assets/gift.png')}
        />
        <HomeMainButton
          title="Cüzdan Ekle"
          imgUri={require('../assets/add-wallet.png')}
        />
      </View>
      <View style={styles.tabBar}>
        <MenuButton
          title="CÜZDANLAR"
          imgUri={require('../assets/wallet.png')}
        />
        <MenuButton
          title="KARTLARIM"
          imgUri={require('../assets/credit-card.png')}
        />
        <MenuButton title="BAKİYE" imgUri={require('../assets/balance.png')} />
        <MenuButton title="GEÇMİŞ" imgUri={require('../assets/history.png')} />

      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    borderTopWidth: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderColor: '#F7F7F7',
    elevation: 4,
    height: (windowHeight * 1) / 10,
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  searchContainer: {
    width: windowWidth,
    height: (windowHeight * 1) / 10,
    flexDirection: 'row',
  },
  searchWrapper: {
    flexDirection: 'row',
    width: windowWidth / 2,
    alignItems: 'center',
  },
  allWallets: {
    flexDirection: 'row',
    width: windowWidth / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  allWalletsText: {
    fontFamily: 'Roboto-Bold',
  },
  input:{
    marginRight:10,
  },
  iconSize: {
    width: 20,
    height: 20,
    margin: 10,
  },
  ellipseBackground: {
    width: windowWidth,
    height: (windowHeight * 3) / 10,
    backgroundColor: '#2C2C58',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },
  laginaImg: {
    width: windowWidth,
  },
  starsImg: {
    width: windowWidth,
    height: (windowHeight * 1) / 10,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    padding: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
