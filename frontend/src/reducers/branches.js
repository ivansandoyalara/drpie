import {
    FETCH_BRANCHES_BEGIN,
    FETCH_BRANCHES_SUCCESS,
    FETCH_BRANCHES_FAILURE,
    SELECT_BRANCH,
} from '../actions/branches'

const initialState = {
    items: [],
    loading: false,
    error: null,
    selectedItem: null
}

export default function branchesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BRANCHES_BEGIN: 
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_BRANCHES_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.branches
            }

        case FETCH_BRANCHES_FAILURE:
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

        case SELECT_BRANCH: 
            // Select a specific branch from branch picker
            // Set this branch id into 
            return {
                ...state,
                selectedItem: action.payload
            }
        
        default:
            return state
    }
}
