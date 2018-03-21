const host = `http://86d28861.ngrok.io`

export const config = {
    host,
    apiEndpoint: `${host}/api`,
}

export const apiDirectory = {
    branches: `${config.apiEndpoint}/branches`,
    questions: `${config.apiEndpoint}/questions`,
    visitors: `${config.apiEndpoint}/visitors`
}
