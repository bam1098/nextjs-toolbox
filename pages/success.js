import Head from 'next/head'
import Link from 'next/link'
import Footer from '@components/Footer'
import background from './bgblank.svg'

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

export default function Success() {
  return (
    <div className="container" style={backgroundStyling}>
      <Head>
        <title>Next.js Toolbox Template!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Submission Received!</h1>
        <p>Thank you for your feedback! Head back to the <Link href="/"><a>home page</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
