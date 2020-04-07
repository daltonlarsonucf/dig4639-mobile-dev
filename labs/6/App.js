import React from 'react';
import { StyleSheet, Text, View, CheckBox, Button } from 'react-native';

export default class App extends React.Component {
  state={}
  render (){
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>What is the course code for this class?</Text>
        <View style={styles.answers}>
          <CheckBox value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
          <Text style={styles.baseText}>DIG 4639C</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
          <Text style={styles.baseText}>DIG 4649C</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
          <Text style={styles.baseText}>DIG 4539C</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}></CheckBox>
          <Text style={styles.baseText}>DIG 3134</Text>
        </View>
        <Button title='submit'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answers: {
    flexDirection: 'row',
    alignItems: 'left'
  },
  baseText: {
    fontSize: 24,
    color: 'grey'
  }
});
