import request from '../../helpers/axios'

const getUsers = (URL) => {
    return new Promise((resolve, reject) => {
        request
            .get(`/users?${URL}`)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error.response.data.error)
            })
    })
}

export default getUsers