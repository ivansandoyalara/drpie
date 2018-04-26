export const FETCH_QUESTIONS_BEGIN = 'FETCH_QUESTIONS_BEGIN'
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE'
export const TOGGLE_EXIT_MODAL = 'TOGGLE_EXIT_MODAL'
export const SET_QUESTIONS_FORM_TYPE = 'SET_QUESTIONS_FORM_TYPE'

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

export const toggleExitModal = status => ({
    type: TOGGLE_EXIT_MODAL,
    payload: status
})

export const setQuestionsFormType = type => ({
    type: SET_QUESTIONS_FORM_TYPE,
    payload: type
})
