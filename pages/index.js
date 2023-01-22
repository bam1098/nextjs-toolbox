import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './bg-blank.svg';

const backgroundStyling = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:"100vw",
    height:"100vh",
}
const logo = {
    height:"50px",
    width:"50px",
    text-align:start
}


export default function Home() {
  return (
    <div className="container" style={backgroundStyling}>
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src='./ram.svg' alt="Rammy" style={logo}/>
        <FeedbackForm />
      </main>
    </div>
  );
}
