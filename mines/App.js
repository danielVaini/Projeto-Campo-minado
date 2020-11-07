import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


import params from './src/params';
import Field from './src/components/Field';



const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mines
        </Text>
        <Text>Numero de colunas: {params.getColumnsAmount()}</Text>
        <Text>Numero de linhas: {params.getRowsAmount()}</Text>
        <Field />
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={6}/>
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field mined flag/>
        <Field flag opened/>


      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});

export default App;
