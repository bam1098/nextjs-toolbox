import Head from "next/head";
import Footer from "@components/Footer";
import background from "/public/background.jpeg"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/House & Chimney.xcf" alt="testphoto"/>
        <a href="/survey">
          <button>Begin the Survey!</button>
        </a>
      </main>
      <Footer />
    </div>
  );
}
