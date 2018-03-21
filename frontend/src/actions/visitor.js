export const FETCH_VISITOR_BEGIN = 'FETCH_VISITOR_BEGIN'
export const FETCH_VISITOR_SUCCESS = 'FETCH_VISITOR_SUCCESS'
export const FETCH_VISITOR_FAILURE = 'FETCH_VISITOR_FAILURE'
export const RESET_VISITOR_STATUS = 'RESET_VISITOR_STATUS'

import { apiDirectory } from '../config'

export function fetchVisitor(values) {
    return dispatch => {
        const url = `${apiDirectory.visitors}`
        let fetchData = { 
            method: 'POST', 
            body: JSON.stringify(values),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }
        dispatch(fetchVisitorBegin())
        return fetch(url, fetchData)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            //console.log(JSON.stringify(json))
            dispatch(fetchVisitorSuccess(json))
            return json
        })
        .catch(error => {
            console.log(`[Error in App]: ${error}`)
            return dispatch(fetchVisitorFailure(error))
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

export const fetchVisitorBegin = () => ({
    type: FETCH_VISITOR_BEGIN
})

export const fetchVisitorSuccess = response => ({
    type: FETCH_VISITOR_SUCCESS,
    payload: { response }
})

export const fetchVisitorFailure = error => ({
    type: FETCH_VISITOR_FAILURE,
    payload: { error }
})

export const resetVisitorStatus = () => ({
    type: RESET_VISITOR_STATUS
})
