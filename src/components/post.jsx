import { Link } from "react-router-dom";
import Card from "./card";
import cardData from "./data";
function Post() {
  return (
    <>
      <div className="flex justify-between dark:bg-slate-800 pt-20 pb-10  gap-6 items-center flex-col">
        <h1 className="text-xl font-bold dark:text-slate-100">Recent posts</h1>
        <div className=" lg:px-20 sm:px-10  grid lg:grid-cols-3 gap-8 pb-10 sm:grid-cols-1 md:grid-cols-2">
          {cardData.map(function (card) {
            return (
              <Link to={`/card/${card.id}`}>
                <Card
                  key={card.id}
                  title={card.title}
                  date={card.date}
                  imgSrc={card.imgSrc}
                  discription={card.discription}
                />
              </Link>
            );
          })}
        </div>

        <Link
          to="/admin"
          className="underline font-semibold text-sm dark:text-slate-100"
        >
          View More
        </Link>
      </div>
    </>
  );
}

export default Post;
