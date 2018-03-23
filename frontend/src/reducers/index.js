import connectionstatus from './connectionstatus'
import branches from './branches'
import questions from './questions'
import visitor from './visitor'
//import report from './report'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    connectionstatus,
    branches,
    questions,
    visitor,
    //report,
    form: formReducer,
})

export default rootReducer
