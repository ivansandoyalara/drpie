import React from 'react'
import { StackNavigator } from 'react-navigation'
//screens
import BranchScreen from './screens/branch/containers/branchscreen'
import QuestionsScreen from './screens/questions/containers/questionsscreen'
import ConfirmationScreen from './screens/confirmation/containers/confirmationscreen'

const RootStack = StackNavigator({
    Branch: {
      screen: BranchScreen
    },
    Questions: {
      screen: QuestionsScreen
    },
    Confirmation: {
      screen: ConfirmationScreen
    }
  },
  {
    initialRouteName: 'Branch',
  }
)

export default RootStack
