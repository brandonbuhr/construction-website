import Image from "next/image";
import Link from "next/link";

function Homesections() {
  return (
    <>
      <div className="flex justify-center bg-blue-200 rounded-2xl pt-8 pb-8">
        <div className="w-[50%] flex-col">
          <h1 className="text-center font-bold text-2xl mt-8">
            Buhr Construction is a ShingleMaster!
          </h1>
          <p className="ml-[22%] mr-[16%] mt-12">
            Our skilled workforce is proudly led by CertainTeed ShingleMasterTM
            certified experts. This accreditation ensures a commitment to
            quality. All crews are trained to use the highest quality materials
            and installation techniques, while adhering to exceptional standards
            for safety, and are all fully insured on the job site.
          </p>
        </div>
        <div className="mr-28">
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col text-center mt-12">
        <h1 className="text-center font-bold text-2xl mt-8 mb-8">
          Hear from our satisfied clients
        </h1>

        <p className="ml-[20%] mr-[20%]">
          “Thank you for the excellent job your men did on my roof. You have
          real good hardworking and friendly people working for you. Thanks
          again.”
        </p>
        <p>-Dores</p>
        <button className="mt-8 mb-16 bg-blue-600 text-white p-2 rounded-3xl mr-[43%] ml-[43%] transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
          Read more testimonials
        </button>
      </div>
      <div className="flex justify-center mt-22 bg-blue-200 rounded-2xl pt-8 pb-8">
        <div className="w-[50%] flex justify-center mt-8">
          <button className="mt-8 mb-16 p-8 bg-blue-600 text-white p-2 rounded-3xl font-bold text-2xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
            Request your free quote!
          </button>
        </div>
        <div className="w-[50%] text-center mt-8">
          <h1 className="text-2xl font-bold mt-8 mr-60 ml-12">
            Got Questions? Need a Quote?
          </h1>
          <p className="mt-8 mr-60 ml-12">
            Let us help with your next project! Call us today to answer your
            questions or for a quote at{" "}
            <b className="text-xl">(920) 825-1318</b>.
          </p>
          <button className="mt-8 mb-16 mr-60 ml-12 bg-blue-600 text-white p-2 pl-4 pr-4 rounded-3xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
            Contact Us
          </button>
        </div>
      </div>
      <div className="mt-32 mr-8 ml-8">
        <div className="ml-48 mr-48">
          <h1 className="text-2xl font-bold mt-8">
            Browse our collection of work
          </h1>
          <p className="text-xl mt-8 mb-8 mr-80">
            The most enjoyable part of the building process is watching our
            customers step back to smile and admire the beauty of their finished
            project. Get a virtual preview of that experience by browsing this
            collection showcasing new homes and remodels in Brown, Kewaunee and
            Door Counties.
          </p>
            <Link href="gallery">
          <button className="mt-8 mb-16 bg-blue-600 text-white p-2 pl-4 pr-4 rounded-3xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
            View Our Gallery
            
            
          </button>
  </Link>
        </div>
        <div className="flex mb-28 justify-between p-2">
          <Image
            src="/example1.jpg"
            alt="house"
            width={400}
            height={400}
            className="hover:cursor-pointer hover:opacity-80 hover:opacity-80"
          />
          <Image
            src="/sample2.jpg"
            alt="house"
            width={400}
            height={400}
            className="hover:cursor-pointer hover:opacity-80"
          />
          <Image
            src="/sample3.jpg"
            alt="bench"
            width={400}
            height={400}
            className="hover:cursor-pointer hover:opacity-80 object-cover"
          />
          <Image
            src="/sample4.jpg"
            alt="house"
            width={400}
            height={400}
            className="hover:cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </>
  );
}

export default Homesections;
