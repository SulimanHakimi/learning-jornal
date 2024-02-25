// import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="sm:px-10 sm:text-sm sm:font-bold lg:px-20 h-20 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10"
            src="https://s3-alpha-sig.figma.com/img/0d3c/e4ac/61b804f61e5f03da50af5674102e33e3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=my3MtdSEHE2oTCNfqFtJli6h6WRHMwXdYhK5a6cqnOGEeWDqi4HwUI2rnwTKvPIv3cZrpZ~58R-eqyAZHmLbshBCyR7tv3~XvrOtfixjktZuwFarD~v0Ld8d02s~pDm4jE5TaOsS7Rzsee-0sebs3rTnzAt~2AwMzPZ38ZyOdimCXx1RVgldbmxqIbGVgiBUczpbHdCwe8VNt3ByqOdoL1n~oS7oRX~KoFH9~npWZ4kLenhn~hekHUdwhOMCVS946hZBWUccu44S~-lR096HgL4SciDo5dOQ62EMhDTmnn8RIlE1hWbqSfkj1wes2fDMt~soxrhw6WLnm7YJWB7DTA__"
            alt=""
          />
          <h1 className="sm:text-lg sm:font-semibold lg:text-xl  lg:font-bold">
            My learning journal
          </h1>
        </div>
        <ul className="flex gap-8 font-medium sm:gap-5">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT ME</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
