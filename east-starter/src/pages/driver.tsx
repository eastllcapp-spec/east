import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function DriverPage(){
  return <>
    <Head><title>Driver — EAST</title></Head>
    <Navbar />
    <main style={padding:20}>
      <h2>Driver Portal (placeholder)</h2>
      <p>Signup and dashboard pages will be added here.</p>
    </main>
  </>
}
