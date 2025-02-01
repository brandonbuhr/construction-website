import Navbar from "@/components/Navbar";
import "./globals.css";
import Iconbar from "@/components/Iconbar";
import Mainbanner from "@/components/Mainbanner";
import Homesections from "@/components/Homesections";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
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
          <Footer />
        </div>
      </div>
    </>
  );
}
