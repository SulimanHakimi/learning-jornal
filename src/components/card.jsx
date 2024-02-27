function Card(data) {
  return (
    <>
      <div className="h-[420px] dark:bg-slate-800 w-[350px] bg-bgim rounded overflow-hidden shadow-xl">
        <img className="w-full h-1/2 object-cover" src={data.imgSrc} alt="" />
        <div className="flex justify-center flex-col gap-3 px-2 py-4">
          <span className="dark:text-slate-100 text-sm text-slate-800">
            {data.date}
          </span>
          <h1 className="dark:text-slate-100 font-extrabold text-lg  text-slate-800">
            {data.title}
          </h1>
          <p className="dark:text-slate-100 line-clamp-4 text-slate-800">
            {data.discription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
