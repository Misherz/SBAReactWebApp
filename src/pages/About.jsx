import '/src/App.css'
import Header from '../components/Header'

export default function AboutPg(){

    //Inline CSS for About Page:
    const aboutStyle = {
        color: "white",
        backgroundColor: "rgb(92, 121, 115)", 
        width: "40%",
        alignSelf: "center",
        padding: "1em 2em 1em 2em",
        Display: "flex",
        justifyContent: "center",
        margin: "auto",
        borderRadius: "3em",
    }

    return(
        <div className='menuPage' style={aboutStyle}>
            <h1>About</h1>
            <p>Welcome to Scaling The Truth, your go-to source for staying updated with the latest headlines from major news outlets worldwide. We aggregate and summarize breaking news stories, so you never miss an important update. Our team curates content from trusted news sources, covering everything from politics and global events to technology, business, entertainment, and sports. Whether you're on the go or just looking for a quick briefing, we provide concise, reliable, and up-to-date news in one place. Stay informed with us — fast, accurate, and always current.</p>
        </div>
    )
}
