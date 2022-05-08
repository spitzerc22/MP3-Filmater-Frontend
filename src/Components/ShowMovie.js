import {Link} from 'react-router-dom'

export default function showMovie() {
    return(
        <div> 
            <div className="goBack">
                <Link to="/genres/:genre">Go Back To List</Link>
        </div>
        <div>
            <h1>This is a single movie</h1>
        </div>
        </div>
    )
}