import React from 'react';
import { StyleSheet, View } from 'react-native';



export default props => {

  return (
    <View >
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.mastro, props.bigger ? styles.flagpoleBigger : null]}/>
    </View>
  );

};

const styles = StyleSheet.create({
  flag: {
    height: 8,
    width: 16,
    backgroundColor: 'white',
  },
  mastro: {
    height: 15,
    width: 2,
    backgroundColor: 'black',
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 4,
    backgroundColor: 'black',
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft:16,
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12,
  },
});
