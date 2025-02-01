import Image from "next/image";
//width 80px height 80px color #007ec2

function Iconbar() {
  return (
    <>
      <nav>
        <ul className="flex justify-center space-x-10 pl-10 pr-10">
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image src="/house-solid.svg" alt="house" width={80} height={80} />
            <li className="mt-5">New Construction</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image src="/pencil-solid.svg" alt="house" width={70} height={80} />
            <li className="mt-5">Remodeling</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image
              src="/people-roof-solid.svg"
              alt="house"
              width={85}
              height={80}
            />
            <li className="mt-5">Roofing</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image src="/tree-solid.svg" alt="house" width={60} height={80} />
            <li className="mt-5">Tree Removal</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image src="/window.png" alt="house" width={70} height={80} />
            <li className="mt-5">Windows & Siding</li>
          </div>
          <div className="flex-col justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-5 rounded-3xl">
            <Image src="/hammer-solid.svg" alt="house" width={78} height={80} />
            <li className="mt-5">Woodwork</li>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default Iconbar;
