import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-900 text-gray-100 flex shadow w-full">
      <div className="container mx-auto p-5 items-center flex flex-col md:flex-row">
        <Link href={"/"} className="flex md:w-1/5 title-font font-medium items-center mb-4 md:mb-0 md:justify-start">
          <Image src={"/images/logo.png"} width={40} height={40} />
          <span className="ml-3 uppercase font-bold">Dev Blog</span>
        </Link>

        <nav className="flex md:w-4/5 items-center text-base md:justify-end md:ml-auto ">
          <Link href={"/blog"} className="mx-3 cursor-pointer uppercase hover:text-indigo-300">Blog</Link>
          <Link href={"/about"} className="mx-3 cursor-pointer uppercase hover:text-indigo-300">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
