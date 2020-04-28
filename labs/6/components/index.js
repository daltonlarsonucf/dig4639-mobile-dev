import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import questions from './questions.json'

const quizState = 0
const questionState = 1

export default class Quiz extends React.Component {
  constructor(props) {
    super()
    this.state = {
      currentState: quizState,
      counter: 0,
      question: 0
    }
  }

  nextQuestion(i) {
    if (i.correct){
      this.setState({counter: this.state.counter + 1})
    }
    this.setState({question: this.state.question + 1})
  }

  render () {
    return (
      <View>
        {(this.state.currentState === quizState) ? 
          <View>
              <Text style = {styles.text}>Welcome to the Dalton Quiz</Text>
              <Button style = {styles.button} title = "Start" type = "outline" onPress = { () => this.setState({ currentState: questionState })}/>
          </View>
        : (this.state.question < questions.length) ? 
          <View>
            <Text style={styles.text}>{questions[this.state.question].question}</Text>
            <View>
              {questions[this.state.question].answers.map((answer, i) => {
                return <Button style = {styles.button} title = {answer.text} type = "outline" key = {i} onPress = {() => this.nextQuestion(answer)} />
              })}
            </View>
          </View>
        :<View>
            <Text style = {styles.text}>Congrats!</Text>
            <Text style = {styles.text}>Score: {this.state.counter}/{questions.length}</Text>
            <Button style = {styles.button} title = "Restart" type = "outline" onPress = {() => this.setState({ currentState: quizState, question: 0, counter: 0 })}/>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
      width: 200,
      margin: "auto",
      padding: 5,
  },
  text: {
      fontSize: 50,
      fontFamily: "Futura",
      color: "grey",
      textAlign: "center",
  }
})