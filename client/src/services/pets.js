import axios from "axios"

const petUrl = "http://localhost:3001/api/pets"
const usrUrl = "http://localhost:3001/api/user"


const addPet = petObj =>{
    return axios.post(petUrl,petObj)
}

const getPets = () => {
    return axios.get(petUrl)
}

const addUser = usrObj =>{
    return axios.post(usrUrl,usrObj)
}

const getUser = (id) => {
    return axios.get(`${usrUrl}/${id}`)
}

const loginUser = loginCreds => {
    return axios.post(`${usrUrl}/login`,loginCreds)
}


const services = {addPet,getPets,addUser,getUser,loginUser}
export default services 