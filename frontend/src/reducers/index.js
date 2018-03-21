import branches from './branches'
import questions from './questions'
import visitor from './visitor'
//import report from './report'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    branches,
    questions,
    visitor,
    //report,
    form: formReducer,
})

export default rootReducer
