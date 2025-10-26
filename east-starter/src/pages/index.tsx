import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'

const MapboxView = dynamic(() => import('../components/MapboxView'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>EAST — Drive Local. Live Green.</title>
      </Head>
      <Navbar />
      <main style={{padding: 20}}>
        <h1 style={{color:'#10B981'}}>EAST — Drive Local. Live Green.</h1>
        <p>Starter app: Map + Firebase + Mapbox placeholders.</p>
        <div style={{height: '60vh', borderRadius:8, overflow:'hidden', marginTop:12}}>
          <MapboxView />
        </div>
      </main>
    </>
  )
}
