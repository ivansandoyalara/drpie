import React, { Component } from 'react'
import BranchScreen from './src/screens/branch'
import QuestionsScreen from './src/screens/questions'
import { StackNavigator } from 'react-navigation'

const RootStack = StackNavigator({
    Branch: {
      screen: BranchScreen
    },
    Questions: {
      screen: QuestionsScreen
      //aaa: vvvv
    }
  },
  {
    initialRouteName: 'Branch',
  }
)

class App extends Component {
  render() {
    return (
      <RootStack />
    )
  }
}

export default App
