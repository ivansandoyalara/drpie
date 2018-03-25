export const QUEUE_VISITOR = 'QUEUE_VISITOR'
export const SYNC_VISITOR_BEGIN = 'SYNC_VISITOR_BEGIN'
export const SYNC_VISITOR_SUCCESS = 'SYNC_VISITOR_SUCCESS'
export const SYNC_VISITOR_FAILURE = 'SYNC_VISITOR_FAILURE'

import { apiDirectory } from '../config'

export const queueVisitor = values => ({
    type: QUEUE_VISITOR,
    payload: {values}
})

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.body);
    }
    return response;
}
