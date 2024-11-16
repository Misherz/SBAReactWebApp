
export default function Footer(){
    const today = new Date();
    const year= today.getFullYear();

    return(
        <div>
            <footer>
                <p>Copyright @ {year}</p>
            </footer>
        </div>
    )
}