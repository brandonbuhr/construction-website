import Image from "next/image";

function Homesections() {
  return (
    <>
      <div className="flex justify-center bg-blue-200 rounded-2xl pt-4 pb-4">
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
        <button className="mt-8 mb-16 bg-blue-600 text-white p-2 rounded-3xl mr-[42%] ml-[42%]">
          Read more testimonials
        </button>
      </div>
      <div className="flex justify-center mt-22">
        <div className="w-[50%] flex justify-center mt-8">
          <button className="mt-8 mb-8 p-8 bg-blue-600 text-white p-2 rounded-3xl font-bold text-2xl">
            Request your free quote!
          </button>
        </div>
        <div className="w-[50%] text-center mt-8">
          <h1 className="text-2xl font-bold mt-8">
            Got Questions? Need a Quote?
          </h1>
          <p className="mt-8 mr-12 ml-12">
            Let us help with your next project! Call us today to answer your
            questions or for a quote at{" "}
            <b className="text-xl">(920) 825-1318</b>.
          </p>
          <button className="mt-8 mb-16 bg-blue-600 text-white p-2 rounded-3xl mr-[42%] ml-[42%]">
            Learn more
          </button>
        </div>
      </div>
      <div className="mt-24">
        <div>
          <h1>Browse our collection of work</h1>
          <p>
            The most enjoyable part of the building process is watching our
            customers step back to smile and admire the beauty of their finished
            project. Get a virtual preview of that experience by browsing this
            collection showcasing new homes and remodels in Brown, Kewaunee and
            Door Counties.
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default Homesections;
