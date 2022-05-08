import MovieGallery from "./MovieGallery"
import {Link, useNavigate} from 'react-router-dom'


export default function Genres () {
    let navigate = useNavigate();
    return(
       
        <div className="genreContainer">
            <div>
                <Link to="/genres/browseAll" className="browseAll" element={<MovieGallery genre='browseAll'/>}>Browse All Submissions!</Link>
            </div>
            <div className="genreList">
                <div className="leftList">
                    {/* <div className='action' onClick={() => {navigate('/genres/action'
                    )}}>Action</div> */}
                    <ul>
                        <li>
                            <Link to="/genres/action" className="action">Action</Link>
                        </li>
                            
                        <li>
                            <Link to="/genres/comedy" className="comedy">Comedy</Link>
                        </li>
                            
                        <li>
                            <Link to="/genres/fantasy" className="fantasy">Fantasy!</Link>
                        </li>
                            
                    </ul>
                    
                </div>
                <div className="rightList">
                    <ul>
                        <li>
                            <Link to="/genres/family" className="family">Family</Link>
                        </li>
                            
                        <li>
                            <Link to="/genres/thriller" className="thriller">Thriller</Link>
                        </li>
                            
                        <li>
                            <Link to="/genres/scifi" className="scifi">Sci-Fi</Link>
                        </li>
                            
                    </ul>
                </div>
        </div>
        </div>
        
    )
}