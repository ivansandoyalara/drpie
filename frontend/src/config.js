const host = `http://073e9b15.ngrok.io`

export const config = {
    host,
    apiEndpoint: `${host}/api`,
}

export const apiDirectory = {
    branches: `${config.apiEndpoint}/branches`,
    questions: `${config.apiEndpoint}/questions`,
    visitors: `${config.apiEndpoint}/visitors`
}
