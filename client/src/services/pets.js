import axios from "axios"

const petUrl = "/api/pets"
const usrUrl = "/api/user"


const addPet = petObj =>{
    return axios.post(petUrl,petObj)
}

const getPets = () => {
    return axios.get(petUrl)
}

const getMyPets = (contact) => {
    return axios.get(`${petUrl}/mypets/${contact}`)
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


const services = {addPet,getPets,addUser,getUser,loginUser,getMyPets}
export default services 