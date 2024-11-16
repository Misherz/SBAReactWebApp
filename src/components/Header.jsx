export default function Header(){
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year= today.getFullYear();
  
    return (
      <>
        <h1>Top News of {day}/{month}/{year}🤓</h1>
      </>
    )
}