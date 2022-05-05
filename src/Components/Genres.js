import MovieGallery from "./MovieGallery"
import {Link} from 'react-router-dom'

export default function Genres () {

    const pickGenre = (e) => {
        
        console.log('you click on', e.target.id)
        
    }
    return(
        <div className="genreContainer">
            <div>
                <h1 className="browseAll" onClick={pickGenre}>Browse All Submitted Movies!</h1>
            </div>
            <div className="genreList">
                <div className="leftList">
                    <h1 className="action" id="action" onClick={pickGenre}>Action</h1>
                    <h1 className="comedy" id="comedy" onClick={pickGenre}>Comedy</h1>
                    <h1 className="fantasy" id="fantasy" onClick={pickGenre}>Fantasy</h1>
                </div>
                <div className="rightList">
                    <h1 className="family" id="family" onClick={pickGenre}>Family</h1>
                    <h1 className="thriller" id="thriller" onClick={pickGenre}>Thriller</h1>
                    <h1 className="scifi" id="scifi" onClick={pickGenre}>SciFi</h1>
                </div>
        </div>
        </div>
        
    )
}