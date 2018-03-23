const host = `http://6e5e342c.ngrok.io`

export const config = {
    host,
    apiEndpoint: `${host}/api`,
}

export const apiDirectory = {
    branches: `${config.apiEndpoint}/branches`,
    questions: `${config.apiEndpoint}/questions`,
    visitors: `${config.apiEndpoint}/visitors`
}
