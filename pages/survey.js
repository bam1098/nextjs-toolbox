import FeedbackForm from "@components/FeedbackForm";
import Head from "next/head";

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
    </div>
  );
}
