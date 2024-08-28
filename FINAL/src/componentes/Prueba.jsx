import React from "react";

const Prueba = () => {
  return (
    <body className="flex flex-col md:flex-row absolute top-[600px] text-[13px] gap-2 font-JoseFina">
      <div className="mb-4 md:mb-0">
        <div className="flex justify-between items-center bg-slate-950 rounded-[15px] w-[330px] h-11 px-4">
          <a className="mx-auto" href="#">
            HOME
          </a>
          <p>➝</p>
        </div>
      </div>
      <div className="mb-4 md:mb-0 md:ml-4">
        <div className="flex justify-between items-center bg-slate-950 rounded-[15px] w-[330px] h-11 px-4">
          <a className="mx-auto" href="#">
            COMUNNITY
          </a>
          <p>➝</p>
        </div>
      </div>
      <div className="mb-4 md:mb-0 md:ml-4">
        <div className="flex justify-between items-center bg-slate-950 rounded-[15px] w-[330px] h-11 px-4">
          <a className="mx-auto" href="#">
            HELP
          </a>
          <p>➝</p>
        </div>
      </div>
      <div className="md:ml-4">
        <div className="flex justify-between items-center bg-slate-950 rounded-[15px] w-[330px] h-11 px-4">
          <a className="mx-auto" href="#">
            CONTACT
          </a>
          <p>➝</p>
        </div>
      </div>
    </body>
  );
};

export default Prueba;
