import Image from "next/image";

function Homesections() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%] flex-col">
          <h3 className="text-center">Buhr Construction is a ShingleMaster!</h3>
          <p className="ml-[22%] mr-[20%] mt-12">
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
    </>
  );
}

export default Homesections;
