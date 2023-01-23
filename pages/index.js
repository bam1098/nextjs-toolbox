import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';
import background from './bgblank.svg';

const backgroundStyling = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    width:"100vw",
    height:"140vh",
}
const logo = {
    height:"13vh",
    width:"13vw",
    display:"flex",
    justifyContent: "center",
    padding:"1vh"
}


export default function Home() {
    return (
        <div>
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
        </div>
  );
}
