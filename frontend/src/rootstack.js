import React from 'react'
import { StackNavigator } from 'react-navigation'
//screens
import BranchScreen from './screens/branch/containers/branchscreen'
import QuestionsScreen from './screens/questions/containers/questionsscreen'
import ConfirmationScreen from './screens/confirmation/containers/confirmationscreen'
import ReportScreen from './screens/report/containers/reportscreen'

const RootStack = StackNavigator({
    Branch: {
      screen: BranchScreen
    },
    Questions: {
      screen: QuestionsScreen
    },
    Confirmation: {
      screen: ConfirmationScreen
    },
    Report: {
      screen: ReportScreen
    }
  },
  {
    initialRouteName: 'Branch',
  }
)

export default RootStack
