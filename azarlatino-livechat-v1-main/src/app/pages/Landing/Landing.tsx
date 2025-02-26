"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaGamepad, FaSuperpowers } from "react-icons/fa";
import { IoIosCash } from "react-icons/io";
import { MdCasino } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import LandingLayout from "@/app/component/LandingLayout/LandingLayout";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  const playerRef: any = useRef(null);
  const [, setStartPlay] = useState<boolean>(false);

  const handleChatToggle = () => {
    if (window.$chatwoot) {
      window.$chatwoot.toggle();
    }
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
    setStartPlay(true);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <LandingLayout>
      <div className="w-full">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="p-4 bg-[#FF7A29] text-white rounded-lg shadow-lg hover:bg-[#FFA64D] fixed z-2 bottom-[18px] left-[18px] cursor-pointer"
          >
            ↑
          </button>
        )}
        <div className="w-full flex justify-center lg:h-[68%] bg-[#27064a] ">
          <div className="container mx-auto px-10">
            <div className="w-full h-full  flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full flex flex-col lg:pt-0 pt-8 justify-center items-center">
                <div className="w-full flex justify-start">
                  <Fade>
                    <span className="text-orange-600 pb-6">Bonus</span>
                  </Fade>
                </div>
                <Slide direction="down">
                  <h1 className="xl:text-[2.5rem] text-[2rem] text-white font-semibold xl:leading-[3rem] pb-2 leading-[3rem]">
                    {" "}
                    LA MEJOR PLATAFORMA DEL PAÍS
                  </h1>
                </Slide>

                <Fade>
                  <span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
                    Hablá con nuestros agentes por el chat, creá tu usuario y
                    comenzá a disfrutar de los mejores juegos.
                  </span>
                </Fade>
                <div className="w-full flex justify-start py-6">
                  <Fade>
                    <button
                      className="rounded-sm px-8 py-6 bg-[#FF7A29] hover:bg-[#FFA64D] text-white"
                      onClick={handleChatToggle}
                    >
                      <span className="uppercase font-semibold text-[14px]">
                        Contáctanos
                      </span>
                    </button>
                  </Fade>
                </div>
              </div>
              <Zoom>
                <div className="w-full h-full ">
                  <img
                    src="/images/slotmachine.jpeg"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#050103] ">
          <div className="container mx-auto md:p-10 p-12">
            <div className="w-full flex justify-center flex-col pb-10">
              <h3 className="text-white font-bold lg:text-[3rem] text-[3] text-center">
                <span className="text-orange-500 uppercase text-center font-bold">
                  Bievenidos a la mejor experiencia online
                </span>
              </h3>
            </div>

            <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mb-32">
              <div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c]  cursor-pointer">
                <span className="text-orange-500 uppercase flex justify-center pb-6 font-bold">
                  <FaSuperpowers className="text-[50px] text-orange-500 hover:text-[#FFA64D] " />
                </span>
                <div className="w-full flex justify-center pb-3 ">
                  <span className="text-white font-bold md:text-[1.3rem] text-[1rem]">
                    Cargá Online
                  </span>
                </div>
                <div className=" flex justify-center">
                  <span className="w-40  text-[#858585] text-center text-[17px]">
                    Instantánea
                  </span>
                </div>
              </div>
              <div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
                <span className="text-orange-500 uppercase flex justify-center pb-6  font-bold">
                  <FaGamepad className="text-[50px] text-orange-500 hover:text-[#FFA64D] " />
                </span>
                <div className="w-full flex justify-center">
                  <span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
                    Juegos
                  </span>
                </div>
                <div className=" flex justify-center">
                  <span className="w-40  text-[#858585] text-center text-[17px]">
                    +10.000
                  </span>
                </div>
              </div>
              <div className=" w-full p-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
                <span className="text-orange-500 uppercase flex justify-center pb-6  font-bold">
                  <IoIosCash className="text-[50px] text-orange-500 hover:text-[#FFA64D]" />
                </span>
                <div className="w-full flex justify-center">
                  <span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
                    Pagos Seguros
                  </span>
                </div>
                <div className=" flex justify-center">
                  <span className="w-40  text-[#858585] text-center text-[17px]">
                    Al instante
                  </span>
                </div>
              </div>
              <div className=" w-full py-12 flex flex-col justify-center bg-[#120d1c] cursor-pointer">
                <span className="text-orange-500 uppercase flex justify-center pb-6  font-bold">
                  <MdCasino className="text-[50px] text-orange-500 hover:text-[#FFA64D]" />
                </span>
                <div className="w-full flex justify-center">
                  <span className="text-white font-bold  md:text-[1.3rem] text-[1rem]">
                    Diversión garantizada
                  </span>
                </div>
                <div id="carga" className=" flex justify-center">
                  <span className="w-40  text-[#858585] text-center text-[17px]">
                    En segundos
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-12 pt-8 pb-48">
              <div className="xl:w-1/2 w-full h-full">
                <img
                  src="/Designer2.jpeg"
                  style={{ width: "90%", height: "100%" }}
                  className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                />
              </div>
              <div className="xl:w-1/2 w-full h-full">
                <h2 className="lg:text-[3rem] text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
                  Guía para cargar{" "}
                </h2>
                <span className="lg:text-[16px] text-md text-[#a4a4a4] pt-6">
                  Desde esta página vas a acceder a algunos beneficios
                  especiales
                </span>
                <div className="mt-9 mx-4">
                  <ul className="list-disc text-[#b8b8b8]">
                    <li className="pb-2">
                      Paso 1: Haz clic en el ícono del live chat.
                    </li>
                    <li className="pb-2">
                      Paso 2: Selecciona el tipo de ficha que deseas cargar.
                    </li>
                    <li className="pb-2">
                      Paso 3: Sigue las instrucciones del agente para completar
                      el proceso.
                    </li>
                  </ul>
                </div>
                <div className="w-full flex justify-start py-6">
                  <button
                    className="rounded-sm px-12 py-6 bg-[#FF7A29] hover:bg-[#FFA64D]  text-white"
                    onClick={handleChatToggle}
                  >
                    <span className="uppercase font-semibold text-[14px]">
                      Contáctanos
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="star w-full h-[80vh]">
            <div className="w-full h-full container mx-auto md:px-10 px-12 flex  ">
              <div className="lg:w-1/2 w-full  h-full flex flex-col justify-center items-center ">
                <div className="w-full flex justify-start">
                  <span className="text-orange-500 font-bold tracking-[.35em]">
                    CARGÁ CON LIVE-CHAT
                  </span>
                </div>
                <div className="w-full flex justify-start">
                  <h2 className="lg:text-[3rem] text-[2rem] pb-4 text-white font-semibold lg:leading-[3.6rem] leading-[3rem]">
                    Divertite y ganá!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

export default Landing;
