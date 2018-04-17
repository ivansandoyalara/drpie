import {
    INSERT_EMPLOYEE_CODE,
    FETCH_EMPLOYEE_REPORT_BEGIN,
    FETCH_EMPLOYEE_REPORT_SUCCESS,
    FETCH_EMPLOYEE_REPORT_FAILURE,
} from '../actions/report'

const initialState = {
    employeeCode: null,
    employeeReport: null,
    loading: false,
    error: null,
}

export default function reportReducer(state = initialState, action) {
    switch (action.type) {
        case INSERT_EMPLOYEE_CODE:
            // save the requested employee code
            return {
                ...state,
                employeeCode: action.payload
            }

        case FETCH_EMPLOYEE_REPORT_BEGIN: 
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case FETCH_EMPLOYEE_REPORT_SUCCESS:
            // get and save employee report
            return {
                ...state,
                employeeCode: null,
                employeeReport: action.payload.employeeReport,
                loading: false,
            }

        case FETCH_EMPLOYEE_REPORT_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                employeeCode: null,
                employeeReport: null,
                loading: false,
                error: action.payload.error,
            }

        default:
            return state
    }
}
