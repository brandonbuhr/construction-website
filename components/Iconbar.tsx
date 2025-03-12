import Image from "next/image";
//width 80px height 80px color #007ec2

function Iconbar() {
  return (
    <>
      <nav>
        <ul className="flex flex-wrap justify-center space-x-10 sm:flex-wrap md:flex-wrap">
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image
              src="/house-solid.png"
              alt="house"
              width={100}
              height={100}
            />
            <li className="mt-5">New Construction</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image
              src="/pencil-solid.png"
              alt="house"
              width={100}
              height={100}
            />
            <li className="mt-5">Remodeling</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image
              src="/people-roof-solid.png"
              alt="house"
              width={100}
              height={100}
            />
            <li className="mt-5">Roofing</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image src="/tree-solid.png" alt="house" width={100} height={100} />
            <li className="mt-5">Tree Removal</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image
              src="/window-icon.png"
              alt="house"
              width={100}
              height={100}
            />
            <li className="mt-5">Windows & Siding</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-6 rounded-3xl transform scale-100 hover:scale-[1.1] transition duration-200">
            <Image
              src="/hammer-solid.png"
              alt="house"
              width={100}
              height={100}
            />
            <li className="mt-5">Woodwork</li>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default Iconbar;
