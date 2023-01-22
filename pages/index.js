import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './bg-blank.svg';

const styling = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
        <img src='./ram.png' alt="Rammy"/>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
