import branches from './branches'
import questions from './questions'
//import report from './report'
//import visitor from './visitor'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    branches,
    questions,
    //report,
    //visitor,
    form: formReducer,
})

export default rootReducer
