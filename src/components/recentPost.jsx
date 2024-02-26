import React from "react";
import cardData from "./data";
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
      <div className="px-28 flex gap-4 flex-col">
        <h1 className="font-extrabold sm:text-lg md:text-xl lg:text-2xl">
          How I stay committed to learning
        </h1>
        <p>
          I like to think of myself as a lifelong learner. I used to spend hours
          and hours learning, then try to create simple projects using what I
          learned or work new techniques into existing projects.
        </p>
        <p>
          While that was fun, I felt like it would be helpful to share what I
          was learning and most things about my journey with the world.
        </p>
        <h1 className="font-extrabold sm:text-lg md:text-xl lg:text-2xl">
          How I got started
        </h1>
        <p>
          I started simple and gradually grew my learning journal site. I would
          take notes about what I was learning. After each learning session, I'd
          use my notes to not only reflect on what I learned but also write
          short summaries of what I learned using my own words.
        </p>
        <p>
          That helped me grok what I was learning, and I realized that posting
          my learning summaries was also helping others learn and stay
          motivated.
        </p>
      </div>
    </div>
  );
}

export default RecentPost;
