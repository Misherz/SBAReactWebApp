import '/src/App.css'
import Header from '../components/Header'


export default function ContactPg(){

    //Inline CSS for About Page:
    const contactStyle = {
        color: "white",
        backgroundColor: "rgb(92, 121, 115)", 
        width: "60%",
        alignSelf: "center",
        padding: "1em 2em 1em 2em",
        Display: "flex",
        justifyContent: "center",
        margin: "auto",
        borderRadius: "3em",
    }

    return(
        <div className='menuPage' style={contactStyle}>
            <h1>Contact Us!</h1>
            <p>We’d love to hear from you! If you have any questions, comments, or feedback, please don’t hesitate to reach out.</p>
            <p>Email: example@example.com</p>
            <p>Phone: 111-222-3333</p>
            <p>Mailing Address: 123 Example RD Example, Example 11111</p>
            <h2>Social Media:</h2>
            <p>[Facebook]</p>
            <p>[Twitter]</p>
            <p>[Instagram]</p>
            <p>[LinkedIn]</p>
            <p>We aim to respond to all inquiries as quickly as possible. Thank you for visiting!</p>
        </div>
    )
}
