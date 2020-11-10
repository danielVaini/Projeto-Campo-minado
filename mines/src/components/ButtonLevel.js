import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



export default props => {

  var buttonStyle = [styles.button];

  if (props.easy) {buttonStyle.push(styles.bgEasy);  }
  if (props.normal) {buttonStyle.push(styles.bgNormal);}
  if (props.hard) {buttonStyle.push(styles.bgHard);}

  return (
    <TouchableOpacity style={[buttonStyle]} onPress={() => props.onLevelSelected()}>
              <Text style={styles.buttonLabel}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765f7',
  },
  bgHard: {
    backgroundColor: '#f26337',
  },
});
