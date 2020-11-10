import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Modal,
} from 'react-native';



import ButtonLevel from '../components/ButtonLevel';

export default props => {



  return (
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} animationType="slide"
      transparent={true}>

      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o nivel</Text>
          <ButtonLevel easy title="Fácil"  onLevelSelected={() => props.onLevelSelected(0.1)} />

          <ButtonLevel normal title="Normal"   onLevelSelected={() => props.onLevelSelected(0.2)}/>
          <ButtonLevel hard title="Difícil" onLevelSelected={() => props.onLevelSelected(0.3)} />

        </View>
      </View>

    </Modal>
  );
};


const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
