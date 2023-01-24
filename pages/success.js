import Head from 'next/head'
import Link from 'next/link'
import Footer from '@components/Footer'
import background from './bgblank.svg'

const backgroundStyling = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: 'cover',
    width:"100vw",
    height:"140vh",
    color:'white',
}
const logo = {
    height:"13vh",
    width:"13vw",
    display:"flex",
    justifyContent: "center",
    padding:"1vh"
}

const head = {
    color:"black"
}

export default function Success() {
  return (
    <div className="container" style={backgroundStyling}>
      <Head>
        <title>Footprint calculator submission</title>
      </Head>

      <main>
        <h1 style={head}>Submission Received!</h1>
        <p><Link href="/"><a>Click here</a></Link> to return to take the survey again.</p>
      </main>

    </div>
  )
}
