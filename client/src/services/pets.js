import axios from "axios"

const petUrl = "http://localhost:3001/api/pets"
const usrUrl = "http://localhost:3001/api/users"


const addPet = petObj =>{
    return axios.post(petUrl,petObj)
}

const getPets = () => {
    return axios.get(petUrl)
}

const addUser = usrObj =>{
    return axios.post(usrUrl,usrObj)
}

const getUser = () => {
    return axios.get(usrUrl)
}


const services = {addPet,getPets,addUser,getUser}
export default services 