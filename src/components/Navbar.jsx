import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="#inicio"
            className="flex title-font font-medium justify-center align-middle items-center text-gray-900 mb-4 md:mb-0"
          >
            <>
              <Image src="/img/S.png" alt="" width={30} height={30} />
              <span className="ml-3 text-xl">SoftWiz Solutions</span>
            </>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#inicio" className="mr-5 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="#about" className="mr-5 hover:text-gray-900">
              Acerca de
            </Link>
            <Link href="#catalogo" className="mr-5 hover:text-gray-900">
              servicios
            </Link>
            <Link href="#contacto" className="mr-5 hover:text-gray-900">
              Contacto
            </Link>
            {/* <Link href="/" className="mr-5 hover:text-gray-900">
              Shop
            </Link> */}
          </nav>
        </div>
      </header>
    </>
  );
}
