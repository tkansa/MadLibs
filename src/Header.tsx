import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <h1><Link to="/">Mad Libs</Link></h1>
            <div>
                <Link to="/stories">See Saved Stories</Link>
            </div>
            <div>
            <Link to="/create-story">Creat a new Story</Link>
            </div>
        </div>
    );
}

export default Header;
