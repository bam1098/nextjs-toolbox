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
    height:"9vh",
    width:"9vw",
    display:"flex",
    justifyContent: "center",
}


export default function Home() {
  return (
    <div className="container" style={backgroundStyling}>
      <Head>
        <title>Footprint Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src='./ram.svg' alt="Rammy" style={logo}/>
      <main>
        
        <FeedbackForm />
      </main>
    </div>
  );
}
