function Footer() {
  return (
    <>
      <div className="h-32 bg-slate-900 flex justify-center flex-col text-sm text-white items-center">
        <p className="font-medium">My Learning Journal</p>
        <span className="">Copyright ©{new Date().getFullYear()}</span>
      </div>
    </>
  );
}

export default Footer;
