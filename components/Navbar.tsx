import Iconbar from "@/components/Iconbar";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex justify-center space-x-12 pt-12">
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
