export const FETCH_QUESTIONS_BEGIN = 'FETCH_QUESTIONS_BEGIN'
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE'

import { apiDirectory } from '../config'

export function fetchQuestions() {
    return dispatch => {
        const url = `${apiDirectory.questions}`
        dispatch(fetchQuestionsBegin())
        return fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            console.log(`Retrieving json data (questions)...`)
            dispatch(fetchQuestionsSuccess(json))
            return json
        })
        .catch(error => {
            console.log(`[Error in App]: ${error}`)
            return dispatch(fetchQuestionsFailure(error))
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

export const fetchQuestionsBegin = () => ({
    type: FETCH_QUESTIONS_BEGIN
})

export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: { questions }
})

export const fetchQuestionsFailure = error => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: { error }
})
