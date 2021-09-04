import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="font-Playfair flex justify-between items-center my-4 mx-4">
      {/* left section */}
      <div className="text-4xl font-bold">FRUZ</div>
      {/* right section */}
      <div className="flex items-center">
        <Image src="/images/Category.svg" width={24} height={24} />
      </div>
    </nav>
  );
};

export default Navbar;
