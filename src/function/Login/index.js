import request from '../../helpers/axios'

const login = async (userData) => {
    return new Promise((resolve, reject) => {
        request
            .post('/login', userData)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error.response)
            })
    })
        .then(response => {
            return (response);
        })
        .catch(response => {
            return (response)
        })
}

export default login