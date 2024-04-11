import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

// import { Link } from "react-router-dom";
function Nav() {
  const [theme, setTheme] = useState("light");
  function setThemeChange() {
    document.documentElement.classList.toggle("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  return (
    <>
      <div className="sm:px-5 dark:bg-gray-700 bg-slate-100 dark:text-gray-100 text-[] sm:text-sm shadow sm:font-bold lg:px-20 h-20 flex justify-between items-center">
        <div className="flex items-center">
       
          <h1 className="sm:text-sm md:text-lg sm:font-bold lg:text-2xl  lg:font-bold">
            My learning journal
          </h1>
        </div>
        <ul className="flex md:gap-7 lg:gap-10 items-center lg:text-base  sm:font-semibold sm:text-[12px] sm:gap-3">
          <li className="cursor-pointer ">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="cursor-pointer ">
            <Link to={"/about-me"}>ABOUT ME</Link>
          </li>
          <li className="cursor-pointer ">
            <button onClick={setThemeChange}>
              {theme === "dark" ? (
                <CiLight size={25} />
              ) : (
                <MdOutlineDarkMode size={25} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
