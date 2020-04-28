import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quiz from './components/index.js'

export default class App extends React.Component {
  render () {
    return (
      <View style = {styles.quiz}>
        <Quiz/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quiz: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
  }
})