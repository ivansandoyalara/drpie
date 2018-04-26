import {
    TOGGLE_EXIT_MODAL,
    SET_QUESTIONS_FORM_TYPE,
} from '../actions/auxquestions'

const initialState = {
    exitmodal: false,
    cf: null,
}

export default function auxQuestionsReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_EXIT_MODAL:
            return {
                ...state,
                exitmodal: action.payload
            }

        case SET_QUESTIONS_FORM_TYPE:
            return {
                ...state,
                cf: action.payload
            }
        
        default:
            return state
    }
}
