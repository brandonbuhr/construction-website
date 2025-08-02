import Image from "next/image";
import Link from "next/link";

function Homesections() {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row lg:flex-row sm:items-center items-center rounded-2xl pt-8 pb-8">
        <div className="w-[50%] flex-col text-center">
          <h1 className="text-center font-bold text-3xl mt-2">
            Buhr Construction is Hiring!
          </h1>
          <p className="ml-[4%] mr-[4%] mt-12">
            We're looking to add dedicated skilled laborers to our team! If you
            have a strong work ethic and experience in construction trades, we
            want to hear from you. At Buhr Construction, you'll join a crew
            known for craftsmanship and professionalism. We take pride in
            providing ongoing training, top-quality materials, and a safe,
            supportive work environment. Apply today to become a part of our
            growing company!
          </p>
          <p className="font-bold text-center text-4xl mt-8">(920) 825-1318</p>
          <p className="font-bold text-center text-4xl mt-8">
            mbuhr@buhrconstruction.com
          </p>
          <Link href="contact-us">
            <button className="mt-8 mb-8 mr-12 ml-12 bg-blue-600 text-4xl text-white p-4 pl-8 pr-8 rounded-2xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row lg:flex-row sm:items-center items-center bg-blue-200 rounded-2xl pt-8 pb-8">
        <div className="w-[50%] flex-col">
          <h1 className="text-center font-bold text-3xl mt-2">
            Buhr Construction is a ShingleMaster
          </h1>
          <p className="ml-[4%] mr-[4%] mt-12">
            Our skilled workforce is proudly led by CertainTeed ShingleMasterTM
            certified experts. This accreditation ensures a commitment to
            quality. All crews are trained to use the highest quality materials
            and installation techniques, while adhering to exceptional standards
            for safety, and are all fully insured on the job site.
          </p>
        </div>
        <div className=" mt-8 md:mt-4 lg:mt-4 sm:mt-8 sm:mr-0">
          <Image
            src="/shingle-master-logo.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex justify-center flex-col mt-12">
        <h1 className="font-bold text-3xl mt-8 mb-8 text-center">
          Hear from our satisfied clients
        </h1>

        <p className="ml-16 mr-16 text-center">
          “Thank you for the excellent job your men did on my roof. You have
          real good hardworking and friendly people working for you. Thanks
          again.”
        </p>
        <p className="text-center">-Dores</p>
        <Link className="text-center" href="/testimonials">
          <button className="mt-8 mb-16 mr-12 ml-12 bg-blue-600 text-white p-2 pl-4 pr-4 rounded-3xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
            Read more testimonials
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center mt-22 bg-blue-200 rounded-2xl pt-8 pb-8 sm:flex-col md:flex-col lg:flex-row">
        <div className="flex justify-center mt-8">
          <Link href="contact-us">
            <button className="mt-8 mb-16 mr-12 ml-12 p-12 bg-blue-600 text-white rounded-3xl font-bold text-2xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
              Request your free quote!
            </button>
          </Link>
        </div>
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold mt-8 mr-12 ml-12">
            Got Questions? Need a Quote?
          </h1>
          <p className="mt-8 mr-12 ml-12">
            Let us help with your next project! Call us today to answer your
            questions or for a quote at{" "}
            <b className="text-xl">(920) 825-1318</b>.
          </p>
          <Link href="contact-us">
            <button className="mt-8 mb-16 mr-12 ml-12 bg-blue-600 text-white p-2 pl-4 pr-4 rounded-3xl transform scale-100 hover:scale-[1.2] transition duration-200 hover:bg-blue-500">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-32 mr-8 ml-8 flex flex-col items-center">
        <div className="ml-12 mr-12">
          <h1 className="text-3xl font-bold mt-8">
            Browse our collection of work
          </h1>
          <p className="text-xl mt-8 mb-8">
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
        <div className="flex mb-28 justify-around p-2 sm:flex-col flex-col md:flex-row lg:flex-row">
          <Link href="gallery">
            <Image
              src="/example1.jpg"
              alt="house"
              width={360}
              height={360}
              className="hover:cursor-pointer hover:opacity-80"
            />
          </Link>
          <Link href="gallery">
            <Image
              src="/sample2.jpg"
              alt="house"
              width={360}
              height={360}
              className="hover:cursor-pointer hover:opacity-80"
            />
          </Link>

          <Link href="gallery">
            <Image
              src="/benches1.jpg"
              alt="bench"
              width={320}
              height={360}
              className="hover:cursor-pointer hover:opacity-80"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homesections;
