import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleNews({ data }) {
  const params = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const res = data?.filter((d) => {
      return d.title === params.id;
    });


    setInfo(res);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      {info === undefined ? (
        <div className="h-screen flex justify-center items-center text-xl">loading....</div>
      ) : (
        <div className="sm:px-6 dark:bg-gray-800 dark:text-gray-100 lg:px-20 py-20 gap-10 flex flex-col justify-between items-start">
          <div className="lg:px-28 sm:px-0 md:px-16 flex flex-col gap-4">
            <span>{info[0].publishedAt}</span>
            <h1 className="font-extrabold sm:text-xl md:text-2xl lg:text-3xl">
              {info[0].title}
            </h1>
            <p>{info[0].description}</p>
          </div>
          <img
            className="w-full object-center md:h-[450px] sm:h-[400px] lg:h-[500px]"
            src={`${info[0].urlToImage}`}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default SingleNews;
