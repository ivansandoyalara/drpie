import { CHANGE_CONNECTION_STATUS } from '../actions/connectionstatus'

const initialState = {
    isConnected: false
}

export default function connectionStatusReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CONNECTION_STATUS:
            // Change connection status when there's a variation on it
            return {
                ...state,
                isConnected: action.payload
            }

        default:
            return state
    }
}
