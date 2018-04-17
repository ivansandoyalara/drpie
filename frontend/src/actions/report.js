export const INSERT_EMPLOYEE_CODE = 'INSERT_EMPLOYEE_CODE'
export const FETCH_EMPLOYEE_REPORT_BEGIN = 'FETCH_EMPLOYEE_REPORT_BEGIN'
export const FETCH_EMPLOYEE_REPORT_SUCCESS = 'FETCH_EMPLOYEE_REPORT_SUCCESS'
export const FETCH_EMPLOYEE_REPORT_FAILURE = 'FETCH_EMPLOYEE_REPORT_FAILURE'

import { apiDirectory } from '../config'

export function fetchEmployeeReport(code) {
    return dispatch => {
        const url = `${apiDirectory.employeeReport}/${code}`
        dispatch(fetchEmployeeReportBegin())
        return fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            console.log(`Retrieving json data (employee report)...`)
            dispatch(fetchEmployeeReportSuccess(json))
            return json
        })
        .catch(error => {
            console.log(`[Error in App]: ${error}`)
            return dispatch(fetchEmployeeReportFailure(error))
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

export const insertEmployeeCode = code => ({
    type: INSERT_EMPLOYEE_CODE,
    payload: code
})

export const fetchEmployeeReportBegin = () => ({
    type: FETCH_EMPLOYEE_REPORT_BEGIN
})

export const fetchEmployeeReportSuccess = employeeReport => ({
    type: FETCH_EMPLOYEE_REPORT_SUCCESS,
    payload: { employeeReport }
})

export const fetchEmployeeReportFailure = error => ({
    type: FETCH_EMPLOYEE_REPORT_FAILURE,
    payload: { error }
})
