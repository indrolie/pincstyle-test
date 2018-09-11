import request from '../../helpers/axios'

const login = (data) => {
    return new Promise((resolve, reject) => {
        request
            .post('/login', data)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error.response.data.error)
            })
    })
}

export default login