
import Genres from './Genres'
import {Link, Route} from 'react-router-dom'

export default function NavBar () {
    return(
        <div className="navBar">
            <ul>
                <li>
                    <Link to="/" style={{ textDecoration: "none"}}>HOME</Link>
                </li>
                <li>
                    <Link to="/genres" style={{ textDecoration: "none"}}>GENRES</Link>
                </li>
                <li>
                    <Link to="/submit" style={{ textDecoration: "none"}}>SUBMISSION</Link>
                </li>
                <li>
                    <Link to="/login" style={{ textDecoration: "none"}}>LOGIN</Link>
                </li>
            </ul>
        </div>
    )
}