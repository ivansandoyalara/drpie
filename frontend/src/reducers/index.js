import connectionstatus from './connectionstatus'
import branches from './branches'
import questions from './questions'
import visitor from './visitor'
//import report from './report'
import queuedvisitors from './queuedvisitors'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    connectionstatus,
    branches,
    questions,
    visitor,
    //report,
    queuedvisitors,
    form: formReducer,
})

export default rootReducer
