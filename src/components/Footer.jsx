import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="contacto" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <Image src="/img/S.png" alt="" width={100} height={50} />
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="#inicio"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link
                    href="#catalogo"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    servicios
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Contacto
              </h2>
              <p>
                <a href="mailto:robertoarguera@gmail.com">
                  robertoarguera@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:scottrodriguez2k@gmail.com">
                  scottrodriguez2k@gmail.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/50378698340">+503 7869-8340</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
