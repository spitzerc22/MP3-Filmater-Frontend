import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <h2>This is Filmater. A place where you can share your favorite movies with one another! Convey your favorite parts through the comment section! If you'd like to submit your movie, you can start by logging in <Link to="/login">here</Link>!</h2>
        </div>
    )
}