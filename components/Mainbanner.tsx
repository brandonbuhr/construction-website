import Image from "next/image";
function Mainbanner() {
  return (
    <>
      <div className="mt-8 flex justify-center items-center">
        <div className="absolute text-center text-2xl text-white xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl">
          <h2 className="font-bold">Quality building for over 20 years.</h2>
        </div>
        <Image
          className=" border-4 border-solid border-blue-600"
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
