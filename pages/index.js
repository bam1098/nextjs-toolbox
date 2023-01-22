import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './bg.svg';

const styling = {
    backgroundImage: `url(${background.src})`,
    width:"100%",
    height:"100%"
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={styling}>
          <FeedbackForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
