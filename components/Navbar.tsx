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
              width={150}
              height={150}
            />
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            <Link href="newconstruction">About Us</Link>
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            Services
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            Testimonials
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            Gallery
          </li>
          <li className="mt-9 text-xl hover:cursor-pointer hover:bg-blue-200 p-2 rounded-3xl transform scale-100 hover:scale-[1.1]">
            Contact Us
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
