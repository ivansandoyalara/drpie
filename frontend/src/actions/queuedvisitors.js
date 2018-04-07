export const QUEUE_VISITOR = 'QUEUE_VISITOR'
export const SYNC_VISITOR_BEGIN = 'SYNC_VISITOR_BEGIN'
export const SYNC_VISITOR_SUCCESS = 'SYNC_VISITOR_SUCCESS'
export const SYNC_VISITOR_FAILURE = 'SYNC_VISITOR_FAILURE'
export const RESET_QUEUE_SYNC_STATUS = 'RESET_STATUS'

import { apiDirectory } from '../config'

export const queueVisitor = values => ({
    type: QUEUE_VISITOR,
    payload: {values}
})

export function syncVisitors(queuedVisitors) {
    return dispatch => {
        const url = `${apiDirectory.visitors}`
        queuedVisitors.forEach((visitor, index, array) => {
            let fetchData = {
                method: 'POST', 
                body: JSON.stringify(visitor),
                headers: new Headers({
                    'Content-Type': 'application/json'
                  })
            }
            dispatch(syncVisitorBegin())
            return fetch(url, fetchData)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => {
                console.log(`Syncing json data (visitor)...`)
                if(json.status === 'STORE_VISITOR_OK')
                    array.shift()
                dispatch(syncVisitorSuccess(array))
                return json
            })
            .catch(error => {
                console.log(`[Error in App]: ${error}`)
                return dispatch(syncVisitorFailure(error))
            })
        })
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.body);
    }
    return response;
}

export const syncVisitorBegin = () => ({
    type: SYNC_VISITOR_BEGIN
})

export const syncVisitorSuccess = visitors => ({
    type: SYNC_VISITOR_SUCCESS,
    payload: { visitors }
})

export const syncVisitorFailure = error => ({
    type: SYNC_VISITOR_FAILURE,
    payload: { error }
})

export const resetQueueSyncStatus = () => ({
    type: RESET_QUEUE_SYNC_STATUS
})
