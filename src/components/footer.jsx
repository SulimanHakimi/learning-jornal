function Footer() {
  return (
    <>
      <div className="h-32 bg-[#202020] flex justify-center flex-col text-sm text-white items-center">
        <p className="font-medium">My Learning Journal</p>
        <span className="text-[#D7D7D7]">
          Copyright ©{new Date().getFullYear()}
        </span>
      </div>
    </>
  );
}

export default Footer;
