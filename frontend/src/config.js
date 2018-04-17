//const host = `http://159.89.233.253/drpie/backend/public`
const host = `http://c9489d33.ngrok.io`

export const config = {
    host,
    apiEndpoint: `${host}/api`,
}

export const apiDirectory = {
    branches: `${config.apiEndpoint}/branches`,
    questions: `${config.apiEndpoint}/questions`,
    visitors: `${config.apiEndpoint}/visitors`,
    employeeReport: `${config.apiEndpoint}/report`,
}
