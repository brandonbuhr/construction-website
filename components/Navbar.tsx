
import Image from "next/image";
function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex justify-center space-x-16 pt-12">
          <li>
            <Image
              src="/logo-buhr-construction.png"
              alt=""
              width={150}
              height={150}
            />
          </li>
          <li className="mt-5">Home</li>
          <li className="mt-5">About Us</li>
          <li className="mt-5">Services</li>
          <li className="mt-5">Testimonials</li>
          <li className="mt-5">Gallery</li>
          <li className="mt-5">Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
