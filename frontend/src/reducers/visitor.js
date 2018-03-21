import {
    FETCH_VISITOR_BEGIN,
    FETCH_VISITOR_SUCCESS,
    FETCH_VISITOR_FAILURE,
    RESET_VISITOR_STATUS,
} from '../actions/visitor'

const initialState = {
    status: null,
    loading: false,
    error: null,
}

export default function visitorReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_VISITOR_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case FETCH_VISITOR_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                status: action.payload.response.status
            }

        case FETCH_VISITOR_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                status: null
            }

        case RESET_VISITOR_STATUS:
            // Set visitor status again to null
            return {
                ...state,
                status: null
            }

        default:
            return state
    }
}
