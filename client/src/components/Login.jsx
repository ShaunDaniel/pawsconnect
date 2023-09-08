import { useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../services/pets";


const Login = () => {

    const navigate = useNavigate()
    const [userLogin,setUserLogin] = useState({
        username:"",
        password:""
    })

    const inputHandler = (e) => {
        setUserLogin({...userLogin,[e.target.name]: e.target.value})
      }

    const clickHandler = () => {
        services.loginUser(userLogin).then((result) => {
            console.log(userLogin)
            if(result){
                localStorage.setItem("u_id",result.data[0]._id)
                localStorage.setItem("u_name",result.data[0].u_name)
                localStorage.setItem("contact",result.data[0].contact)
                navigate('/')
                window.location.reload();
            }
        }).catch((err) => {
            console.error(err)
            
        });

    }
    return(
        <>
            <div className="h-screen flex flex-col  justify-around">
          
                <div className="flex flex-col md:flex-row h-3/4 w-3/4 md:w-1/3 md:h-3/4 bg-amber-300 max-h-fit rounded-lg shadow-lg mx-auto">
                    
                    <div className="login-card w-full md:w-1/2 my-auto">
                    <form method="post">
                
                        <div className="">
                            <div className="font-display w-full text-2xl font-bold my-2 p-1 rounded-xl text-center">
                                Login
                            </div>
                        </div>
                    <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                        Username
                    </div>
                    <input type="text" onChange={inputHandler} name="username"  className="w-full p-1 rounded-lg text-center text-xl font-display" id="" />
                    </div>
                    <div className="mx-5 ">
                    <div className="password font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                        Password
                    </div>
                    <input type="password" onChange={inputHandler}  className="w-full p-1 rounded-lg text-center" name="password" id="" />
                    </div>
                    <div className="mx-5">
                        <div className="mt-4 my-2 text-center cursor-pointer font-display" onClick={()=>navigate('/register')}>Don't have an account?</div>
                    <button type="button" onClick={clickHandler} className="bg-white font-display hover:bg-gray-100 transition-all w-full p-2 rounded-lg">Login</button>
                    </div>
                    </form>

                    </div>

                    <div className="image-div w-1/2 md:1/3 mx-auto my-auto p-2">
                    <img className=" filter drop-shadow-xl" src="./girl.png" alt="" srcset="" />

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Login