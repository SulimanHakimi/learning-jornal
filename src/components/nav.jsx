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
      <div className="sm:px-5 dark:bg-gray-700 dark:text-gray-100 text-[] sm:text-sm shadow sm:font-bold lg:px-20 h-20 flex justify-between items-center">
        <div className="flex lg:gap-2 sm:gap-1 items-center">
          <img
            className="w-10 h-10"
            src="https://s3-alpha-sig.figma.com/img/0d3c/e4ac/61b804f61e5f03da50af5674102e33e3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=my3MtdSEHE2oTCNfqFtJli6h6WRHMwXdYhK5a6cqnOGEeWDqi4HwUI2rnwTKvPIv3cZrpZ~58R-eqyAZHmLbshBCyR7tv3~XvrOtfixjktZuwFarD~v0Ld8d02s~pDm4jE5TaOsS7Rzsee-0sebs3rTnzAt~2AwMzPZ38ZyOdimCXx1RVgldbmxqIbGVgiBUczpbHdCwe8VNt3ByqOdoL1n~oS7oRX~KoFH9~npWZ4kLenhn~hekHUdwhOMCVS946hZBWUccu44S~-lR096HgL4SciDo5dOQ62EMhDTmnn8RIlE1hWbqSfkj1wes2fDMt~soxrhw6WLnm7YJWB7DTA__"
            alt=""
          />
          <h1 className="sm:text-base md:text-lg sm:font-semibold lg:text-xl  lg:font-bold">
            My learning journal
          </h1>
        </div>
        <ul className="flex md:gap-7 lg:gap-10 items-center font-medium sm:gap-3">
          <li className="cursor-pointer">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/about-me"}>ABOUT ME</Link>
          </li>
          <li className="cursor-pointer">
            <button onClick={setThemeChange}>
              {theme === "dark" ? (
                <CiLight size={30} />
              ) : (
                <MdOutlineDarkMode size={30} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
