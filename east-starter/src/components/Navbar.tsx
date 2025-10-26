export default function Navbar(){
  return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:16,background:'#ffffff',borderBottom:'1px solid #eee'}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/logo.png" alt="EAST" style={{width:40,height:40,objectFit:'contain'}}/>
        <div>
          <div style={{fontWeight:700,color:'#10B981'}}>EAST</div>
          <div style={{fontSize:12,color:'#666'}}>Drive Local. Live Green.</div>
        </div>
      </div>
      <div>
        <a href="/driver" style={{marginRight:12}}>Driver</a>
        <a href="/merchant" style={{marginRight:12}}>Merchant</a>
        <a href="/customer">Customer</a>
      </div>
    </nav>
  )
}
