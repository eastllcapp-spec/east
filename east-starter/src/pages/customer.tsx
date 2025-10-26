import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function CustomerPage(){
  return <>
    <Head><title>Customer — EAST</title></Head>
    <Navbar />
    <main style={padding:20}>
      <h2>Customer Portal (placeholder)</h2>
      <p>Signup and dashboard pages will be added here.</p>
    </main>
  </>
}
