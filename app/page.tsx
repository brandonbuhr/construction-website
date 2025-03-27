import Navbar from "@/components/Navbar";
import "./globals.css";
import Iconbar from "@/components/Iconbar";
import Mainbanner from "@/components/Mainbanner";
import Homesections from "@/components/Homesections";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <div>
        <Navbar />

        <div>
          <Mainbanner />
        </div>
        <div className="mt-12">
          <Iconbar />
        </div>
        <div className="mt-12">
          <Homesections />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
