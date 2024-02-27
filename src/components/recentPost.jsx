import React from "react";
import StayComm from "./stayComm";
import article from "./artiData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

function RecentPost() {
  const params = useParams();
  const [articale, setArticale] = useState(article[params.id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div className="sm:px-6 dark:bg-gray-800 dark:text-gray-100 lg:px-20 py-20 gap-10 flex flex-col justify-between items-center">
        <div className="lg:px-28 sm:px-0 md:px-16 flex flex-col gap-4">
          <span>{articale.date}</span>
          <h1 className="font-extrabold sm:text-xl md:text-2xl lg:text-3xl">
            {articale.title}
          </h1>
          <p>{articale.describetion}</p>
        </div>
        <img
          className="w-full object-center md:h-[450px] sm:h-[400px] lg:h-[500px]"
          src={`${articale.imgSrc}`}
          alt=""
        />
        <StayComm />
      </div>
      <Footer />
    </>
  );
}

export default RecentPost;
