import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './bg-blank.svg';

const styling = {
    backgroundImage: `url(${background.src})`,
    width:"100vw",
    height:"100vh",
}

export default function Home() {
  return (
    <div className="container" style={styling}>
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
