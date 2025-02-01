import Navbar from "@/components/Navbar";
import "./globals.css";
import Iconbar from "@/components/Iconbar";
import Mainbanner from "@/components/Mainbanner";
import Homesections from "@/components/Homesections";
export default function Page() {
  return (
    <>
    <div className="ml-24 mr-24">

      <div>
        <Navbar />
      </div>
      <div className="ml-24 mr-24">
        <Mainbanner />
      </div>
      <div className="mt-12 ml-24 mr-24">
        <Iconbar />
      </div>
      <div className="mt-12 mr-24 ml-24">
        <Homesections />
      </div>
    </div>
    </>
  );
}
