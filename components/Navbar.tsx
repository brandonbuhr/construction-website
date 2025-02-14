import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <nav className="mt-8">
        <ul className="flex justify-center space-x-16">
          <li>
            <Image
              src="/logo-buhr-construction.png"
              alt=""
              width={180}
              height={150}
              className="pt-4"
            />
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="about-us">About Us</Link>
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="services">Services</Link>
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="testimonials">Testimonials</Link>
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="gallery">Gallery</Link>
          </li>
          <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
