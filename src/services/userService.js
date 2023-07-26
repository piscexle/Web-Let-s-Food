import axios from '../axios'  //axios ket noi voi nodejs

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`, {
    })
}

const createNewUsersService = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put(`/api/edit-user`, inputData)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const createNewFood = (data) => {
    return axios.post(`/api/create-new-food`, data)
}

export {
    handleLoginApi, getAllUsers,
    createNewUsersService, deleteUserService,
    editUserService, getAllCodeService,
    createNewFood
}