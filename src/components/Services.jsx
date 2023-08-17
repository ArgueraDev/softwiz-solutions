import Image from "next/image";

export default function Services() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#FEF5F5]">
        <div className="container px-5 md:py-24 py-10 mx-auto max-w-7xl">
          <div className="flex flex-col text-center w-full mb-20">
            {/* <span className="text-[#FE6A6A] text-xs">What we Serve</span> */}
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Transformando Desafíos en Soluciones
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/acuerdo.png"
                  alt="acuerdo"
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Aseguramos el cumplimiento integral de acuerdos, tanto legales
                  como contractuales.
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/calidad.png"
                  alt="calidad"
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Garantizamos la excelencia del software mediante pruebas
                  exhaustivas y revisión de código.
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/asegurar.png"
                  alt="asegurar"
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Salvaguardamos a las empresas de amenazas cibernéticas.
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                <Image
                  src="/img/restore.png"
                  alt="restaurar"
                  className=""
                  width={100}
                  height={100}
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Restauramos datos perdidos o eliminados de manera ágil y
                  eficaz
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
