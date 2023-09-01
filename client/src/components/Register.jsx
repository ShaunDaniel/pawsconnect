import { useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../services/pets";


const formHandler = (e) => { };

const Register = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({})


  const handleInput = (e) => {
    setUser({...user,[e.target.name]: e.target.value})
  }
  const handleRegister = () => {
      services.addUser(user).then((result) => {
      console.log(result)
      alert("User registered!")
      }).catch((err) => {
        console.error(err)
      });
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-start">
        

        <div className="flex flex-col my-5 w-3/4 md:w-3/5 md:h-content py-5 bg-amber-300 max-h-fit rounded-lg shadow-lg mx-auto">
        <div className="flex">
          <div className="font-display bg-white w-content px-5 text-2xl font-bold my-2 p-1 rounded-full mx-auto text-center">
            Register
          </div>
        </div>
          <div className="form-component flex flex-col md:flex-row">
          <div className="flex flex-col">
            <form method="post">

              <div className="form-div w-full flex flex-col md:flex-row">

                <div className="login-card w-full md:w-1/2 my-auto">
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Full Name
                    </div>
                    <input type="text" name="u_name" onChange={handleInput} className="w-full p-1 rounded-lg text-center text-xl font-display" />
                  </div>
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Gender
                    </div>
                    <select name="gender" onChange={handleInput} className="w-full p-1 cursor-pointer rounded-lg text-center bg-white  font-display" id="">
                      <optgroup className="font-display">
                        <option value="" selected>Select..</option>
                        <option value="m" >Male</option>
                        <option value="f">Female</option>
                        <option value="t">Transgender</option>
                        <option value="x">Prefer not to say</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Age
                    </div>
                    <input
                      type="text"
                      name="age"
                      onChange={handleInput}
                      className="w-full p-1 rounded-lg text-center text-xl font-display"
                      id=""
                    />
                  </div>

                  <div className="mx-5 ">
                    <div className="password font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Password
                    </div>
                    <input
                      type="password"
                      className="w-full p-1 rounded-lg text-center"
                      name="password"
                      onChange={handleInput}
                      id=""
                    />
                  </div>
                </div>

                <div className="login-card w-full md:w-1/2 my-auto">
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      City
                    </div>
                    <select
                      name="city"
                      className="w-full p-1 cursor-pointer rounded-lg text-center bg-white  font-display"
                      onChange={handleInput}
                      >
                      <optgroup className="font-display">
                        <option selected>Select...</option>
                        <option value="rpr">Raipur</option>
                        <option value="b">Bhilai</option>
                        <option value="bsp">Bilaspur</option>
                        <option value="ambk">Ambikapur</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Username
                    </div>
                    <input
                      type="text"
                      name="username"
                      onChange={handleInput}
                      className="w-full p-1 rounded-lg text-center text-xl font-display"
                    />
                  </div>
                  <div className="m-5">
                    <div className="username font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Mobile Number
                    </div>
                    <input
                      type="text"
                      name="contact"
                      onChange={handleInput}
                      className="w-full p-1 rounded-lg text-center text-xl font-display"
                    />
                  </div>

                  <div className="mx-5 ">
                    <div className="password font-display w-full bg-amber-100 my-2 p-1 rounded-xl text-center">
                      Confirm Password
                    </div>
                    <input
                      type="password"
                      className="w-full p-1 rounded-lg text-center"
                      name="c_password"
                      onChange={handleInput}
                    />
                  </div>
                </div>

              </div>

              <div className="mx-5">
                <div
                  href="/register"
                  className="mt-4 my-2 text-center cursor-pointer font-display"
                  onClick={() => navigate("/login")}>
                  Already have an account?
                </div>
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 transition-all w-full p-2 rounded-lg font-display"
                  onClick={handleRegister}
                  >
                  Register
                </button>
              </div>

            </form>
          </div>
          <div className="image-div w-1/2 md:1/3 mx-auto my-auto p-2">
            <img
              className=" filter drop-shadow-xl"
              src="./guy.png"
              alt=""
              srcSet=""
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
