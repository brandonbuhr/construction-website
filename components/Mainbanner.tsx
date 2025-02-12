import Image from "next/image";
function Mainbanner() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <div className="absolute text-5xl text-white mt-24">
          <h2 className="font-bold text-blue-200">Quality building for over 20 years.</h2>
        </div>
        <div className="absolute text-xl ml-[30%] mr-[30%] text-white text-center mt-48">
          <p className="font-bold text-2xl text-blue-200">
            We are a family-owned Door County builder providing the highest
            quality in full-service construction, remodeling, custom woodwork
            and roofing.
          </p>
        </div>

        <Image
          className="border-4 border-solid border-blue-600"
          src="/house1.jpg"
          alt=""
          width={1000}
          height={400}
        />
      </div>
    </>
  );
}
export default Mainbanner;
