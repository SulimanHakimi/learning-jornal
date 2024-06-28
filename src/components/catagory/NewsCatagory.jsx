
function About() {
  return (
    <>
      <div className="sm:px-2 lg:px-20 dark:bg-slate-800 dark:text-slate-100 h-fit py-20 gap-10 flex flex-col justify-center items-center">
        <div className="flex items-center sm:justify-center gap-5 lg:px-20 md:flex-nowrap sm:flex-wrap md:px-16 sm:px-10">
          <img
            className="rounded-[100%] lg:w-40 lg:h-40"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJx9X1j4gDIYI6mbjf2iO_x3DVLNg2CCvFgmlqIorCsA&s"
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
      </div>
    </>
  );
}

export default About;
