import React from "react";
import StayComm from "./stayComm";
import article from "./artiData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";

function RecentPost() {
  const params = useParams();
  const [articale, setArticale] = useState(article[params.id]);

  return (
    <>
      <Nav />
      <div className="sm:px-6 lg:px-20 h-fit py-20 gap-10 flex flex-col justify-center items-center">
        <div className="px-28 flex flex-col gap-4">
          <span>{articale.date}</span>
          <h1 className="font-extrabold sm:text-xl md:text-2xl lg:text-3xl">
            {articale.title}
          </h1>
          <p>{articale.describetion}</p>
        </div>
        <img className="w-full h-[500px]" src={`${articale.imgSrc}`} alt="" />
        <StayComm />
      </div>
      <Footer />
    </>
  );
}

export default RecentPost;
