import React from 'react'
import { StackNavigator } from 'react-navigation'
//screens
import BranchScreen from './screens/branch/containers/branchscreen'
import QuestionsScreen from './screens/questions/containers/questionsscreen'

const RootStack = StackNavigator({
    Branch: {
      screen: BranchScreen
    },
    Questions: {
      screen: QuestionsScreen
    }
  },
  {
    initialRouteName: 'Branch',
  }
)

export default RootStack
