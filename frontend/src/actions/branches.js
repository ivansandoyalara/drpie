export const FETCH_BRANCHES_BEGIN = 'FETCH_BRANCHES_BEGIN'
export const FETCH_BRANCHES_SUCCESS = 'FETCH_BRANCHES_SUCCESS'
export const FETCH_BRANCHES_FAILURE = 'FETCH_BRANCHES_FAILURE'
export const SELECT_BRANCH = 'SELECT_BRANCH'

import { apiDirectory } from '../config'

export function fetchBranches() {
    return dispatch => {
        const url = `${apiDirectory.branches}`
        dispatch(fetchBranchesBegin())
        return fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            console.log(`Retrieving json data (branches)...`)
            dispatch(fetchBranchesSuccess(json))
            //set selectedBranch to the first branch id
            let arr = Object.keys(json).map(key => json[key])
            if(arr.length > 0) {
                const firstBranch = arr[0]
                dispatch(selectBranch(firstBranch.id))
            }
            return json
        })
        .catch(error => {
            console.log(`[Error in App]: ${error}`)
            return dispatch(fetchBranchesFailure(error))
        })
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchBranchesBegin = () => ({
    type: FETCH_BRANCHES_BEGIN
})

export const fetchBranchesSuccess = branches => ({
    type: FETCH_BRANCHES_SUCCESS,
    payload: { branches }
})

export const fetchBranchesFailure = error => ({
    type: FETCH_BRANCHES_FAILURE,
    payload: { error }
})

export const selectBranch = branchId => ({
    type: SELECT_BRANCH,
    payload: branchId
})
