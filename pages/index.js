import Head from "next/head";
import Footer from "@components/Footer";
import FeedbackForm from '@components/FeedbackForm';

const backgroundStyling = {
    backgroundImage: `url(${'./bg-blank.svg'.src})`,
    backgroundSize: 'cover',
    width:"100vw",
    height:"130vh",
}
const logo = {
    height:"10vh",
    width:"10vw",
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
