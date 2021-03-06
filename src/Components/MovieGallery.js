import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import frontendAction from '../routes/frontendAction';


export default function MovieGallery() {
    
    let {genre} = useParams();
    let [movieData, setMovieData] = useState([])

//get movie data
    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = () => {
        frontendAction.getAll(genre)
        .then((movie) => {
            console.log(movie.data);
            setMovieData(movie.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    
  

    return(
        <div>
            <div className="goBack">
                <Link to="/genres">Go Back To Genres</Link>
            </div>
            <h1>{genre.toLocaleUpperCase()} MOVIES</h1>
            
            <header className="movie_header">
                <div>Image</div>
                <div>Title, Release Year</div>
                <div>Genre</div>
                <div>Description</div>
                <div></div>
                
            </header>
            {movieData.map(movie => (
                <div key={movie._id} className="movie_item"> 
                    <div className="movie_img">
                        <img src={movie.pic} />
                    </div>
                    <div className="movie_title_year">
                        <h2>{movie.title}, {movie.releaseDate}</h2>
                    </div>
                    <div className="movie_genre">
                        {movie.genre}
                    </div>
                    <div className="movie_description">
                        {movie.description}
                    </div>
                    <div className="edit_btn">
                        <button >Edit</button>
                        <button>Delete</button>
                    </div>
                    
                </div>
                
            ))}
            
        </div>
    )
}