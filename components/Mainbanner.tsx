import Image from "next/image";
function Mainbanner() {
  return (
    <>
      <div className="mt-16 flex justify-center items-center">
        <div className="absolute text-center text-2xl text-white xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl">
          <h2 className="font-bold">Quality building for over 20 years.</h2>
        </div>
        <Image
          src="/house1.jpg"
          alt=""
          width={1100}
          height={400}
          className="rounded-2xl"
        />
      </div>
    </>
  );
}
export default Mainbanner;
