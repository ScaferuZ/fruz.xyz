import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-Playfair">
      <Head>
        <title>Fruz - Front end enginer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="mt-24 grid grid-cols-6 gap-4 mx-4">
        <h1 className="col-span-8 text-5xl text-center">Front-end Engineer.</h1>
        {/* hero */}
        <div className="flex row-start-2 col-span-8 mt-6 justify-around">
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
        <section className="mt-24 row-start-3">
          <h2 className="text-3xl">Projects</h2>
        </section>
      </main>
    </div>
  );
}
