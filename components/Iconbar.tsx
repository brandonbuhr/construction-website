import Image from "next/image";
import Link from "next/link";

function Iconbar() {
  return (
    <>
      <nav>
        <ul className="ml-4 mr-4 xl:ml-24 xl:mr-24 font-bold justify-items-center grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
          <Link href="/services">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image
                src="/construction.png"
                alt="house"
                width={100}
                height={100}
              />
              <li className="mt-5">New Construction</li>
            </div>
          </Link>
          <Link href="/services#remodeling">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image src="/home.png" alt="house" width={100} height={100} />
              <li className="mt-5">Remodeling</li>
            </div>
          </Link>
          <Link href="/services#roofing">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image src="/repair.png" alt="house" width={100} height={100} />
              <li className="mt-5">Roofing</li>
            </div>
          </Link>
          <Link href="/services#tree">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image src="/tree.png" alt="house" width={100} height={100} />
              <li className="mt-5">Tree Removal</li>
            </div>
          </Link>
          <Link href="/services#windows">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image
                src="/window-icon.png"
                alt="house"
                width={100}
                height={100}
              />
              <li className="mt-5">Windows & Siding</li>
            </div>
          </Link>
          <Link href="/services#woodwork">
            <div className="w-[200px] justify-items-center text-center hover:bg-blue-200 hover:cursor-pointer p-4 rounded-3xl transform scale-100 hover:scale-[1.05] transition duration-200">
              <Image src="/tools.png" alt="house" width={100} height={100} />
              <li className="mt-5">Woodwork</li>
            </div>
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default Iconbar;
