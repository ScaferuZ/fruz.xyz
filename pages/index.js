import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-Playfair">
      <Head>
        <title>Fruz - Front end engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="mt-24 lg:mt-48 grid grid-cols-6 lg:grid-cols-10 gap-4 mx-4">
        <h1 className="col-span-8 lg:col-span-10 text-5xl lg:text-7xl lg:font-bold text-center">
          Front-end Engineer.
        </h1>
        <Link className="" href="#">
          <a className="hidden lg:mt-8 lg:block lg:row-start-2 lg:col-span-2 lg:col-start-5 lg:text-3xl lg:px-2 lg:py-4 lg:text-center bg-primary text-white">
            Contact me
          </a>
        </Link>
        {/* hero */}
        <div className="flex row-start-2 lg:row-start-3 col-span-8 sm:col-span-4 lg:col-span-2 lg:col-start-5 sm:col-start-2 mt-6 lg:mt-8 lg:h-14 justify-around">
          <Image
            className="cursor-pointer"
            src="/images/foundation_social-github.svg"
            width={40}
            height={40}
          />
          <Image
            className="cursor-pointer"
            src="/images/foundation_social-twitter.svg"
            width={40}
            height={40}
          />
          <Image
            className="cursor-pointer"
            src="/images/typcn_social-linkedin.svg"
            width={40}
            height={40}
          />
          <Image
            src="/images/Vector.svg"
            width={35}
            height={35}
            className="cursor-pointer"
          />
        </div>
        {/* Projects */}
        <section className="sm:hidden mt-24 row-start-3">
          <h2 className="text-3xl">Projects</h2>
        </section>
      </main>
    </div>
  );
}
