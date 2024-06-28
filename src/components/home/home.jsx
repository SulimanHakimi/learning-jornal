function Home({ data }) {
  console.log(data)
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${data?.urlToImage}')`,
        }}
        className="w-full bg-no-repeat bg-cover bg-center "
      >
        <div className="backdrop-blur-sm">
          <div className="sm:px-6 w-2/3 sm:gap-2 lg:gap-4 bg-blend-darken lg:px-20  h-screen md:pb-20 sm:pb-10 lg:pb-32  text-white flex flex-col justify-end items-start">
            <span className="font-medium text-base">{data?.publishedAt}</span>
            <h1 className="font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
              {data?.title}
            </h1>
            <p className="lg:w-[45vw] sm:font-light sm:w-[85vw] ">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
