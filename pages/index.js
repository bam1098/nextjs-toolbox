import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './background.svg';

export default function Home() {
  return (
    <div className="container">
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
