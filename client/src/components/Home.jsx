import { Link } from "react-router-dom";

const Home = () => {


  return (     
      <div className=" h-screen md:h-4/5 flex flex-col sm:flex-row justify-between md:justify-evenly bg-white">
        <div className="flex gap-3 flex-col h-1/2 md:h-2/4 lg:h-2/3 mx-3 justify-around text-center md:text-left font-display ">
          <div className="text-5xl md:text-6xl xl:text-7xl font-semibold p-2 rounded-lg self-center md:self-auto w-fit">
            Adopt,
            <br />
            Don't Shop.
          </div>
          <Link to="/pets"><button type="button" className=" rounded-full bg-amber-200 hover:bg-amber-300 hover:scale-110 transition delay-100 ease-in-out  w-fit self-center md:self-auto py-2 px-4">Available Adoptions
          </button></Link>
            
        </div>
        <img className="object-contain align-bottom relative md:top-7 " src="./hero.png" alt="" srcset="" />
      </div>
  );
};

export default Home;
