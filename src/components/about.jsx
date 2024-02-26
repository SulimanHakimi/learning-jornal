import StayComm from "./stayComm";

function About() {
  return (
    <>
      <div className="sm:px-2 lg:px-20 h-fit py-20 gap-10 flex flex-col justify-center items-center">
        <div className="flex items-center gap-5 lg:px-20 md:flex-nowrap sm:flex-wrap md:px-16 sm:px-10">
          <img
            className="rounded-full lg:w-40 lg:h-40"
            src="https://scontent.fkbl6-1.fna.fbcdn.net/v/t39.30808-1/400162532_353718267336117_207196693099899198_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=nhQ2udr1XxoAX-rSDel&_nc_ht=scontent.fkbl6-1.fna&oh=00_AfA5S4FL7bjapmU_6ODQgTyzmncqvFoejUTaKtoSXMf5sA&oe=65E25C9A"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h1 className="font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
              Hi there! My name is Suliman Hakimi and welcome to my learning
              journal.
            </h1>
            <p>
              After several months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects projects and meet like-minded
              peers.
            </p>
          </div>
        </div>
        <StayComm />
      </div>
    </>
  );
}

export default About;
