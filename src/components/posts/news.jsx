import { Link } from "react-router-dom";
import Card from "../card/card";




function News(news) {

  return (
    <>
      <div className="flex min-h-screen justify-between dark:bg-slate-800 pt-20 pb-10  gap-6 items-center flex-col">
        <div className=" w-full h-20 flex justify-end px-20 items-center">
          <input
            className="h-10 px-3 py-3 rounded border-r-0 rounded-r-none  outline-none border"
            type="text"
          />
          <button className="rounded border h-10 rounded-l-none px-3">Search</button>
        </div>
        <div className=" lg:px-20 sm:px-10  grid lg:grid-cols-3 gap-8 pb-10 sm:grid-cols-1 md:grid-cols-2">
            {news?.data?.map(function (n) {
              return (
                <Link to={`/news/${n.title}`}>
                  <Card key={Math.random()} data={n} />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default News;
