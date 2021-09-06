import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyclone Smart products</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest"></link>
          <meta name="description" content="Cyclone smart products webshop" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <center className="grid place-items-center mt-10">
        <h1 className="text-5xl">Lets build Amazon 2.0</h1>
        <h2>This is your starter template!</h2>
        <br />
        <h3 className="font-bold">
          We will be using Next.js / Tailwind CSS / Redux / Firebase / NextAuth
        </h3>
        <i>(Dont worry, its all setup and ready to use!)</i>
        <h4>Get Ready, Get Set, GO!!!</h4>

        <h5 className="mb-10">#PAPAFAM</h5>

        <div className="bg-red-300 p-10">
          <p className="font-bold">
            Dont forget to register for the challenge here!
          </p>
          <p>👇👇👇</p>
          <a
            href="https://www.papareact.com/secret-challenge"
            className="text-blue-400 underline p-3 font-bold"
          >
            CLICK HERE TO REGISTER NOW
          </a>
        </div>

        <p className="mt-24">Built with 💙 by Sonny Sangha (PAPA REACT)</p>
      </center>
      {/* ---- ---- */}
    </div>
  );
}
