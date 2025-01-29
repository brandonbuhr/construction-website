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
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">Home</li>
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">About Us</li>
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">Services</li>
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">Testimonials</li>
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">Gallery</li>
          <li className="mt-5 text-xl hover:cursor-pointer hover:underline">Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
