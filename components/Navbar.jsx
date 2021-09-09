import Image from "next/image";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="font-Playfair flex justify-between items-center my-4 mx-4 lg:mx-8 lg:my-6">
      {/* left section */}
      <div className="text-4xl lg:text-5xl font-bold">FRUZ</div>
      <div className="hidden lg:flex items-center text-4xl space-x-10">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Portofolio</a>
        <a href="">Blog</a>
      </div>
      {/* right section */}
      <div className="flex lg:hidden items-center">
        <Image src="/images/Category.svg" width={24} height={24} />
      </div>
      <FaRegMoon className="hidden lg:block text-5xl"></FaRegMoon>
    </nav>
  );
};

export default Navbar;
