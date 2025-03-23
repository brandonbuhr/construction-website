import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <nav className="mt-8">
        <div className="ml-[20%] mr-[20%]">
          <ul className="flex justify-center space-x-4 xl:space-x-16 lg:space-x-12">
            <li>
              <Image
                src="/logo-buhr-construction.png"
                alt=""
                width={180}
                height={150}
                className="pt-4 min-w-[160px]"
              />
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="about-us">About</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="services">Services</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="testimonials">Testimonials</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="gallery">Gallery</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
