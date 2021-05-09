import { Link } from "react-router-dom";

function Launch() {
    return (
        <div>
            <h1>Endure and Survive</h1>
            <Link to="/home">
                <button>Start</button>
            </Link>
            <button>Settings</button>
            <button>About</button>
        </div>
    )
}

export default Launch;