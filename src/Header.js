import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="title">
                <h1>
                    <Link to={`/`}>SEARCH IMAGE</Link >
                </h1>
                <p>
                    search images of Pixabay!
                </p>
            </div>
        </header>
    )
}

export default Header;