import Head from "next/head";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="/survey">
          <button>Begin the Survey!</button>
        </a>
      </main>
      <Footer />
    </div>
  );
}
