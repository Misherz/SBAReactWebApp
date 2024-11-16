import { Link } from 'react-router-dom';

export default function NavBarMenu() {
    return (
        <div>
            <Link to="/Home">
                <button type="button" className="menuButton">🐲</button>
            </Link>
        </div>
    );
}
