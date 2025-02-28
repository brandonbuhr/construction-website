import Footer from "@/components/Footer";
import Mainbanner from "@/components/Mainbanner";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="ml-[25%] mr-[25%]">
        <h1 className="mt-[8%] text-2xl text-blue-600">Project Gallery</h1>
        <h3 className="mt-[8%] text-2xl text-blue-600">
          Browse our collection of work
        </h3>
        <p className="mt-[2%] mb-[8%]">
          The most enjoyable part of the building process is watching our
          customers step back to smile and admire the beauty of their finished
          project. Get a virtual preview of that experience by browsing this
          collection showcasing new homes and remodels in Brown, Kewaunee and
          Door Counties.
        </p>
        <div className="grid grid-cols-2 gap-20">
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/IMG_0970.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/IMG_0977.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0023.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0027.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0030.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0031.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0034.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0038.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0039.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0041.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0042.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0044.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/IMG_0976.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0045.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0046.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0048.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0052.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0054.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0055.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0056.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/DSC_0058.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/IMG_0972.jpg"
            alt="house"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/benches1.jpg"
            alt="bench"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/benches2.jpg"
            alt="bench"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/benches3.jpg"
            alt="bench"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/benches4.jpg"
            alt="bench"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/log-cabin.jpg"
            alt="log cabin"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/table1.jpg"
            alt="table"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/table2.jpg"
            alt="table"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/table3.jpg"
            alt="table"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/table4.jpg"
            alt="table"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/table5.jpg"
            alt="table"
          />
        </div>
        <div className="flex justify-center ml-[30%] mr-[30%] mt-6 mb-8">
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/arbor1.jpg"
            alt="arbor"
          />
          <img
            className="max-w-[100%] hover:scale-[130%] transition-transform"
            src="/gazeebo.jpg"
            alt="gazebo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
