export default function Header(){
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year= today.getFullYear();
  
    return (
      <div className="headerTab">
        <h1 className="header">SCALES OF TRUTH</h1>
        <h2 className="textContent">{day}/{month}/{year}🐉</h2>
      </div>
    )
}