import MovieGallery from "./MovieGallery"
import {Link} from 'react-router-dom'

export default function Genres () {
    return(
        <div className="genreContainer">
            <div>
                <h1 className="browseAll">Browse All Submitted Movies!</h1>
            </div>
            <div className="genreList">
                <div className="leftList">
                    <h1 className="action">Action</h1>
                    <h1 className="comedy">Comedy</h1>
                    <h1 className="fantasy">Fantasy</h1>
                </div>
                <div className="rightList">
                    <h1 className="family">Family</h1>
                    <h1 className="thriller">Thriller</h1>
                    <h1 className="scifi">SciFi</h1>
                </div>
        </div>
        </div>
        
    )
}