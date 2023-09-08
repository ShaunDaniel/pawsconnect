
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import services from "../services/pets";

const Nav = (props) => {

  const [user, setUser] = useState({})
  useEffect(() => {
    const u_id = localStorage.getItem("u_id");
    if (u_id) {
      services.getUser(u_id).then((result) => {
        setUser(result.data)
      }).catch((err) => {
        console.error(err)
      });
    }
    else setUser(null)

  }, []);

  const navigate = useNavigate()


  const logout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  if (user !== null) {
    console.log("inside")
    return (
      <div className="flex flex-col md:flex-row h-fit md:justify-between nav bg-gradient-to-b from-amber-200">

        <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
          <Link to="/">pawsconnect</Link>
        </div>

        <div className="flex flex-col md:flex-row  justify-around">
          <div className="mt-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-xl md:text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black ">
            <Link to="/petadd" className={" "}>add a pet!</Link>
          </div>
            <button type="button" id="profile-dropdown" data-dropdown-toggle="profile-options" className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-xl md:text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
               {user.username}
               <svg clasName="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div id="profile-options" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-1/3 md:w-1/6 mx-4 ">
              <ul class="text-md md:text-lg text-center font-display py-3 bg-amber-100" aria-labelledby="dropdownDefaultButton">
                <li className="my-2 bg-amber-300 rounded-full w-auto mx-3 px-5 py-2">
                <Link to={`/user/${user._id}`}>profile</Link>
                </li>
                <li className="my-2 bg-amber-300 rounded-full w-auto mx-3 px-3 py-2">
                <Link to={`/mypets`}>my pets</Link>
                </li>
                <li className="my-2 bg-amber-300 rounded-full w-auto mx-3 px-5 py-2">
                <button className="logout" onClick={()=>logout()}>logout</button>
                </li>
              </ul>
            </div>
          </div>

      </div>
    )
  }

  else {
    return (
      <div className="flex flex-col md:flex-row h-auto  md:justify-between nav bg-gradient-to-b from-amber-200">

        <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
          <Link to="/">pawsconnect</Link>
        </div>

        <div className="flex justify-between">
        <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-xl md:text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black ">
            <Link to="/petadd" className={"m-auto "}>add a pet!</Link>
          </div>
          <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-xl md:text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
            <Link to="/login">login</Link>
          </div>
        </div>

      </div>
    );
  };
}

export default Nav
