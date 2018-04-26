import {
    FETCH_QUESTIONS_BEGIN,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_FAILURE,
    TOGGLE_EXIT_MODAL,
    SET_QUESTIONS_FORM_TYPE,
} from '../actions/questions'

const initialState = {
    items: [],
    loading: false,
    error: null,
    exitmodal: false,
    cf: null,
}

export default function QuestionsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_BEGIN: 
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_QUESTIONS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.questions
            }

        case FETCH_QUESTIONS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        
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
