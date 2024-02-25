function Card(data) {
  return (
    <>
      <div className="h-96 w-80 bg-slate-50 rounded overflow-hidden shadow-sm">
        <img
          className="w-full h-1/2 object-cover"
          src="https://s3-alpha-sig.figma.com/img/bfde/8904/0b8b12a3905aae211b4670527c7c14f6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WpRYhwD2BTWiHqrxEGGtPLRUouQjYFkF-rR9u2BV4lC5pMTrwHigUxo9vR7~js8pPsjaAacx76Z7A~YWA0qeUPwc8rqz7dAEWenNMMGHU6KvAVZM5s0uZvkee~3CYPj5ynie1Xy2VN~avt6PlsKWDa~OdHWHwXI4vvBsOETEei7JaXCclRjDdUJ631KMYaKOWm8HHcorNwqc~8PcPFb8o6qPY9aioaQyyTb4NYpbMgVzyRKLtNTQMFY6XaInRlQo6F5gM1zypBncLLppwfbYXekHHw1csqWdrYrM42PfOBBKyaZYHJYKQTIV6Zhf3dJ11pxMhB7xKo2cMJ6ubN~YgQ__"
          alt=""
        />
        <div className="flex justify-center flex-col gap-3 px-2 py-4">
          <span className="text-sm text-slate-800">{data.date}</span>
          <h1 className="font-extrabold text-lg">{data.title}</h1>
          <p className="line-clamp-3 text-slate-800">{data.discription}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
