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
        <button className="mt-8 mb-8 bg-blue-600 text-white p-2 rounded-3xl mr-[42%] ml-[42%]">
          Read more testimonials
        </button>
      </div>
    </>
  );
}

export default Homesections;
