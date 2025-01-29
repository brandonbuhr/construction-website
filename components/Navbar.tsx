import Iconbar from "@/components/Iconbar";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="flex justify-center pt-12">
        <Iconbar />
      </div>
    </>
  );
}

export default Navbar;
