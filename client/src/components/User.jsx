import { useEffect, useState} from "react"
import services from "../services/pets"
import ProfileItem from "./ProfileItem"

const User = (props) => {

    const [userDisplay,setUser] = useState({})
    
   
   useEffect(()=>{
    console.log("inside effect",localStorage.getItem('u_id')) 
    services.getUser(`${localStorage.getItem('u_id')}`).then((result) => {
        console.log('getuser ka result',result)
        setUser(result.data)
    })
    }
   ,[])

   if(userDisplay!=null){
    switch (userDisplay.city) {
        case "ambk":
            setUser({...userDisplay,city:"Ambikapur"})
            break;
        case "b":
                setUser({...userDisplay,city:"Bhilai"})
                break;
        case "rpr":
                setUser({...userDisplay,city:"Raipur"})
                break;
        case "bsp":
                setUser({...userDisplay,city:"Bilaspur"})
                break;
        default:
            break;
    }
    switch(userDisplay.gender){
        case "m":
            setUser({...userDisplay,gender:"Male"})
            break;
        case "f":
            setUser({...userDisplay,gender:"Female"})
            break;
        case "t":
            setUser({...userDisplay,gender:"Transgender"})
            break;
        case "x":
            setUser({...userDisplay,gender:"Not disclosed"})
            break;
            default:
                break;
        
    }
    return(
        <div className="h-screen flex items-center">
            <div className="flex flex-col-reverse md:flex-row w-4/5 md:w-1/2  h-4/5 md:h-2/3 bg-amber-300 rounded-xl mx-auto p-10">
                <div className="info w-full md:w-1/2">
            <ProfileItem text={userDisplay.u_name} label={"Name"}></ProfileItem>
            <ProfileItem text={userDisplay.username} label={"Username"}></ProfileItem>
            <ProfileItem text={userDisplay.contact} label={"Mobile"}></ProfileItem>
            <ProfileItem text={userDisplay.city} label={"City"}></ProfileItem>
            </div>

            <img className="h-full w-1/2 rounded-xl object-contain self-center" src={`http://localhost:3001/users/${userDisplay.img_url}`} alt="" srcSet="" />
            </div>
        </div>
    )
   }
   else
   return(
    <div className="h-screen">
        404! User not found!
    </div>
)
    
}
export default User