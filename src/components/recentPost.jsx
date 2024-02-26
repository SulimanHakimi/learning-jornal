import React from "react";
import cardData from "./data";
import StayComm from "./stayComm";
function RecentPost() {
  return (
    <div className="sm:px-6 lg:px-20 h-fit py-20 gap-10 flex flex-col justify-center items-center">
      <div className="px-28 flex flex-col gap-4">
        <span>{cardData[0].date}</span>
        <h1 className="font-extrabold sm:text-xl md:text-2xl lg:text-3xl">
          My new journey as a bootcamp student.
        </h1>
        <p className="">
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </p>
      </div>
      <img
        className="w-full h-[500px] "
        src="https://static.vecteezy.com/system/resources/thumbnails/003/106/496/small/technology-background-with-binary-code-pattern-free-vector.jpg"
        alt=""
      />
      <StayComm />
    </div>
  );
}

export default RecentPost;
