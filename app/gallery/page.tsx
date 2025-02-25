import Footer from "@/components/Footer";
import Mainbanner from "@/components/Mainbanner";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Mainbanner />
      <div className="ml-[30%] mr-[30%]">
        <h1 className="mt-[8%] text-2xl text-blue-600">Project Gallery</h1>
        <h3 className="mt-[8%] text-2xl text-blue-600">
          Browse our collection of work
        </h3>
        <p className="mt-[1%]">
          The most enjoyable part of the building process is watching our
          customers step back to smile and admire the beauty of their finished
          project. Get a virtual preview of that experience by browsing this
          collection showcasing new homes and remodels in Brown, Kewaunee and
          Door Counties.
        </p>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
