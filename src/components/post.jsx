import Card from "./card";
import cardData from "./data";
function Post() {
  return (
    <>
      <div className="flex justify-between pt-20 pb-10  gap-6 items-center flex-col">
        <h1 className="text-xl font-bold">Recent posts</h1>
        <div className=" lg:px-20 sm:px-10  grid lg:grid-cols-3 gap-8 pb-10 sm:grid-cols-1 md:grid-cols-2">
          {cardData.map(function (card) {
            return (
              <Card
                key={card.id}
                title={card.title}
                date={card.date}
                imgSrc={card.imgSrc}
                discription={card.discription}
              />
            );
          })}
        </div>
        <button className="underline font-semibold text-sm">View More</button>
      </div>
    </>
  );
}

export default Post;
