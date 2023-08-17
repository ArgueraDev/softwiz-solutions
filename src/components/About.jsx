import Image from "next/image";

export default function Services() {
  return (
    <>
      <section id="about" className="text-gray-600 body-font bg-[#FEF5F5]">
        <div className="container px-5 md:py-24 py-10 mx-auto max-w-7xl">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Acerca de SoftWiz Solutions
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/S.png"
                  alt="logo"
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Somos SoftWiz Solutions
                </h2>
                <p className="leading-relaxed mt-5 text-md">
                  Somos una empresa especializada en el análisis forense de
                  software, brindando servicios de investigación, consultoría y
                  peritaje en casos relacionados con información digital.
                  Nuestro enfoque abarca desde la recuperación de datos y
                  detección de malware hasta la evaluación de la integridad de
                  sistemas. Además, ofrecemos análisis de cumplimiento de
                  contratos, consultoría en desarrollo de software y seguridad
                  de la información.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/mision.jpg"
                  alt="mision"
                  className=""
                  width={100}
                  height={100}
                />
                <p className="leading-relaxed mt-5 text-md">
                  Somos una empresa que proporciona soluciones confiables y de
                  alta calidad para ayudar a los clientes a investigar
                  incidentes y resolver problemas legales relacionados con la
                  tecnología, manteniendo la integridad de la información
                  digital y una actitud objetiva e independiente en todo
                  momento.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/vision.jpg"
                  alt="vision"
                  className=""
                  width={100}
                  height={100}
                />
                <p className="leading-relaxed mt-5 text-md">
                  Ser una empresa reconocida como líder en el campo, ofreciendo
                  soluciones de alta calidad a sus clientes, y proporcionado un
                  servicio excepcional con un enfoque en la integridad, la
                  objetividad e independencia.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/valores.jpg"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
                <p className="leading-relaxed mt-5 text-md">
                  • Integridad.
                  <br />
                  • Confidencialidad.
                  <br />
                  • Excelencia.
                  <br />
                  • Objetividad.
                  <br />• independencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
