export const TOGGLE_EXIT_MODAL = 'TOGGLE_EXIT_MODAL'
export const SET_QUESTIONS_FORM_TYPE = 'SET_QUESTIONS_FORM_TYPE'

export const toggleExitModal = status => ({
    type: TOGGLE_EXIT_MODAL,
    payload: status
})

export const setQuestionsFormType = type => ({
    type: SET_QUESTIONS_FORM_TYPE,
    payload: type
})
