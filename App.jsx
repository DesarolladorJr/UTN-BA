import React from "react";
import Imgg from "./Imagenes/COFFE CAFE (2).png";
import "./App.css";
import Fondo from "./Imagenes/principioo.png";
import Menutis from "./components/Menutis";
import Fondod from "./Imagenes/Larls.png";
import Final from "./Imagenes/Otro2.png";
import Prueba from "./components/Prueba";
import Caffeo from "./Imagenes/coffee-819362_1920 1.png";
import Cafecito from "./Imagenes/klipartz.coms (1).png";
import Cafelote from "./Imagenes/pngegg (2s8).png";
import Coflito from "./Imagenes/Sin títulsso-1.jpg";
import Coflito2 from "./Imagenes/Sin títulossssd-2.jpg";
import Conflito3 from "./Imagenes/Sin títulsso-3.jpg";
import Conflito4 from "./Imagenes/Croassant-4.jpg";
import Conflito5 from "./Imagenes/Sin títulsdo-5.jpg";
import Conflito6 from "./Imagenes/Sin títulsdo-6.jpg";
import Gps from "./Imagenes/google-maps-22-1200x675 1.png";

import Grameer from "./Imagenes/grames.png";

import Facee from "./Imagenes/facebook.png";

import Xmost from "./Imagenes/x-twitter.png";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Formulario from "./components/Formulario";
import Login from "./components/Login";
import ProductCard from "./components/ProductCard";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <body>
              <div className="sm:hidden">
                <img src={Fondod} alt="fondoo" />
              </div>

              <div className="h-[8px] max-sm:h-[130px] max-lg:hidden">
                <img
                  src={Fondo}
                  alt="imagen-fondo"
                  className="w-full h-[700px]"
                />
              </div>

              <div className="Ocultar">
                <img src={Final} alt="" />
              </div>
              <header className="flex justify-center m-10">
                <div className="absolute left-10 top-5 max-sm:-translate-x-1/2  max-sm:left-1/2">
                  <img
                    src={Imgg}
                    alt="Logo"
                    className="h-[80px] max-sm:h-[130px] max-sm:my-[120px]"
                  />
                </div>

                <ul>
                  <li className="flex space-x-10 max-sm:hidden text-white font-Kotta text-[20px]">
                    <Link
                      to="/login"
                      className="hover:scale-125 transition-transform duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/union"
                      className="hover:scale-125 transition-transform duration-300"
                    >
                      Productos
                    </Link>
                    <Link
                      to="/redireccionar"
                      className="hover:scale-125 transition-transform duration-300"
                    >
                      Registro
                    </Link>

                    <Link
                      to="/contacto"
                      className="hover:scale-125 transition-transform duration-300"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </header>

              <section className="text-white mx-12 absolute top-40 leading-none max-sm:hidden ">
                <p className="m-0 font-karma text-[20px]">Disfruta y Sonrei</p>
                <h1 className="text-[100px] font-body m-0">
                  Disfruta del mejor café, justo aquí
                </h1>
              </section>
              <section className="absolute inset-0 flex items-center justify-center text-white sm:hidden ">
                <Prueba />
              </section>

              <section className="">
                <div className=" flex justify-center mr-[200px] mt-[800px] space-x-20 space-y-6 max-pii:flex-col max-pii:p-10  max-pii:space-x-0 max-pii:mr-0 max-pii:mt-[700px] max-pii:text-center max-sm:mt-[400px] ">
                  <div className="flex justify-center">
                    <img src={Caffeo} alt="#" className="max-pii:w-[400px]" />
                  </div>
                  <div>
                    <h3 className="font-Hind text-[22px]">
                      lo mejor lo encontras aca.
                    </h3>
                    <h1 className="text-[50px] font-karma font-semibold ">
                      El mejor cafe se <br /> encuentra en la ciudad{" "}
                    </h1>
                    <p className="text-[28px] font-vrd">
                      Enterate de los mejores ingredientes <br /> y los mejores
                      elementos que tiene <br /> estos cafes que se presentan en
                      nuestros <br /> bares y restauranteas como un buen vino.
                    </p>

                    <button className="my-[30px] bg-white px-7 rounded-[18px] border-black border-[1px] ml-[40px] max-md:ml-[10px] max-pii:items-center pt-1 font-karma font-bold hover:bg-black hover:text-white hover:font-extrabold transition duration-500">
                      <a className="text-[27px] " href="#">
                        saber mas
                      </a>
                    </button>
                    <div className="flex translate-x-[300px] translate-y-16 max-sm:translate-x-5 max-sxx:translate-x-1 max-pii:justify-center max-pii:translate-x-10">
                      <img src={Cafecito} alt="#" className="w-[410px]" />
                    </div>
                  </div>
                </div>
              </section>

              <section className="flex justify-center mt-[200px]">
                <div className="">
                  <h1 className="text-[40px] font-karma ">Nuestro Menu</h1>
                </div>
              </section>
              <section className="flex justify-center ">
                <div className="flex-col space-y-10 mt-[40px]">
                  <Menutis title={"Conta tu Experencia"} />
                  <Menutis title={"DESAYUNO/MERIENDA"} />
                  <Menutis title={"ALMUERZO/CENA"} />
                  <Menutis title={"BEBIDAS"} />
                  <Menutis title={"JUGOS"} />
                </div>
              </section>

              <section className="flex justify-center mt-[250px]">
                <div className="flex flex-col pii:flex-row items-center  ">
                  <div className="pii:order-2">
                    <img
                      src={Cafelote}
                      alt="Café"
                      className="max-md:w-[200px]][300px] h-auto rounded-md max-sm:w-[390px]"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left pii:pl-4 pii:order-1 mt-4 pii:mt-0 max-pii:text-center">
                    <h3 className="font-Hind text-[22px]">Conócenos</h3>
                    <h1 className="text-[50px] font-karma font-semibold max-sm:text-[40px]">
                      Sobre Nosotros
                    </h1>
                    <p className="text-[28px] font-vrd max-sm:text-[14px]">
                      En nuestra cafetería, nos apasiona ofrecer café de <br />{" "}
                      origen de la más alta calidad y una selección de pasteles{" "}
                      <br />
                      artesanales para acompañarlo. Nos enorgullece crear un{" "}
                      <br />
                      ambiente relajado y acogedor, perfecto para una reunión{" "}
                      <br /> con amigos, una sesión de trabajo o simplemente un{" "}
                      <br /> momento de tranquilidad.
                    </p>
                  </div>
                </div>
              </section>

              <section className="">
                <div className="mt-[400px] space-y-[50px]">
                  <div className="flex justify-center font-karma">
                    <h1 className="text-[40px]">Nuestra Galeria</h1>
                  </div>
                  <div className="flex justify-center flex-wrap gap-2 max-sm:p-5 ">
                    <img
                      src={Coflito}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px] max-md:w-[350px]"
                    />
                    <img
                      src={Coflito2}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px] max-md:w-[350px]"
                    />
                    <img
                      src={Conflito3}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px] max-md:w-[350px]"
                    />
                    <img
                      src={Conflito4}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px] max-md:w-[350px]"
                    />
                    <img
                      src={Conflito5}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px] max-md:w-[350px]"
                    />
                    <img
                      src={Conflito6}
                      alt="#"
                      className="w-[500px]  rounded-[20px] max-pii:w-[330px]  max-md:w-[350px]"
                    />
                  </div>
                </div>
              </section>

              <section className="mt-[-200px] ">
                <div className="flex pii:hidden max-pii:translate-y-[650px] text-[40px] justify-center translate-y-[360px] font-karma  max-sm:translate-y-[350px]">
                  <h3 className="font-Hind text-[22px]">Encontranos</h3>
                </div>

                <div className="flex pii:hidden max-pii:translate-y-[650px] text-[40px] justify-center translate-y-[360px] font-karma font-semibold max-sm:translate-y-[350px]">
                  <h1>Nueva Córdoba</h1>
                </div>

                <div className="flex justify-center items-center mr-[200px] mt-[500px] space-x-20 max-pii:flex-col max-pii:mr-0 max-pii:mt-[700px] max-pii:text-center max-sm:mt-[400px]">
                  <div className="flex justify-center max-pii:translate-x-0 max-sm:p-4">
                    <img
                      src={Gps}
                      alt="Ubicación en Nueva Córdoba"
                      className="w-[450px] max-pii:mb-8"
                    />
                  </div>

                  <div className="flex flex-col justify-center max-pii:items-center translate-x-[-35px]">
                    <div className="text-left max-pii:text-left">
                      <h3 className="font-Hind text-[22px] max-pii:hidden">
                        Encontranos
                      </h3>

                      <h1 className="text-[50px] font-karma font-semibold max-pii:hidden">
                        Nueva Córdoba
                      </h1>
                    </div>
                    <p className="text-[28px] font-vrd max-pii:text-[24px] max-pii:px-4">
                      Encontra nuestras sucursales en “Nueva Córdoba”. <br />{" "}
                      Contamos con más de 5 sucursales donde podés venir <br />{" "}
                      a pasar el tiempo y a disfrutar con nosotros los mejores{" "}
                      <br /> menús que tenemos para vos.
                    </p>
                    <div className="text-center">
                      <button className="my-[30px] bg-white px-7 rounded-[18px] border-black border-[1px] font-karma font-bold pt-2 hover:bg-black hover:text-white hover:font-extrabold transition duration-500">
                        <a className="text-[27px] mt-4" href="#">
                          ¡Encontrar Ahora!
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mt-[250px]">
                  <div className="bg-black w-[100%] h-[1px]"></div>
                </div>
                <div className="flex justify-center font-karma font-bold mt-[40px] text-[18px]">
                  <h1>©2024 | Todos los derechos reservados</h1>
                </div>
                <div className="flex justify-center gap-5 mt-3">
                  <img src={Grameer} alt="#" className="w-[40px] h-[45px]" />
                  <img src={Facee} alt="#" className="w-[40px] h-[45px]" />
                  <img src={Xmost} alt="#" className="w-[40px] h-[45px]" />
                </div>
              </section>
            </body>
          }
        />
        <Route path="/redireccionar" element={<Formulario />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/union" element={<ProductCard />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
