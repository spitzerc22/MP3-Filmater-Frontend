
import Genres from './Genres'
import {Link, Route} from 'react-router-dom'

export default function NavBar () {
    return(
        <div className="navBar">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/genres">GENRES</Link>
                </li>
                <li>
                    <Link to="/submit">SUBMISSION</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </div>
    )
}