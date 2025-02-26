import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <>
      <nav className="mt-8">
        <div className="ml-[20%] mr-[20%]">
          <ul className="flex justify-center space-x-8">
            <li>
              <Image
                src="/logo-buhr-construction.png"
                alt=""
                width={180}
                height={150}
                className="pt-4"
              />
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="about-us">About Us</Link>
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="services">Services</Link>
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="testimonials">Testimonials</Link>
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="gallery">Gallery</Link>
            </li>
            <li className="mt-9 pt-6 pl-4 pr-4 text-xl hover:cursor-pointer hover:underline">
              <Link href="contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
