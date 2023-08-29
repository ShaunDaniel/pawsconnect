
import { Link } from "react-router-dom";

const Nav = () => {


  return (
    <div className="flex flex-col md:flex-row h-auto  md:justify-between nav bg-gradient-to-b from-amber-200">
      
      <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
        <Link to="/">pawsconnect</Link>
      </div>
      <div className="m-5 md:m-10 flex items-center px-5 rounded-full md:mx-5 lg:mx-7 text-3xl h-2/5 self-center font-semibold font-display bg-amber-300 text-black">
        <Link to="/petadd">add a pet!</Link>
      </div>

      </div>
  );
};

export default Nav
