import {
    QUEUE_VISITOR,
    SYNC_VISITOR_BEGIN,
    SYNC_VISITOR_SUCCESS,
    SYNC_VISITOR_FAILURE,
    RESET_QUEUE_SYNC_STATUS,
} from '../actions/queuedvisitors'

const initialState = {
    visitors: [],
    queueStatus: false,
    syncStatus: false,
    error: null,
}

export default function queuedVisitorsReducer(state = initialState, action) {
    switch(action.type) {
        case QUEUE_VISITOR:
            // if no connection, store visitor in local persisted state
            return {
                ...state,
                visitors: [...state.visitors, action.payload.values],
                queueStatus: true,
            }
        
        case SYNC_VISITOR_BEGIN:
            // set syncStatus to true
            return {
                ...state,
                syncStatus: true,
            }

        case SYNC_VISITOR_SUCCESS:
            // replace entirely visitors attribute and set syncStatus to false
            return {
                ...state,
                visitors: action.payload.visitors,
                syncStatus: false,
            }

        case SYNC_VISITOR_FAILURE:
            // Save the error, and we can display it somewhere. Set syncStatus to false
            return {
                ...state,
                syncStatus: false,
                error: action.payload.error,
            }

        case RESET_QUEUE_SYNC_STATUS:
            // set queueStatus and syncStatus again to false
            return {
                ...state,
                queueStatus: false,
                syncStatus: false,
            }

        default:
            return state
    }
}
