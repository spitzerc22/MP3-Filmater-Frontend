import { Axios } from 'axios';
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ShowMovie from './ShowMovie'
import axios from 'axios';

export default function MovieGallery() {
    
    let {genre} = useParams();
    let [movieData, setMovieData] = useState([])

//get movie data
    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = () => {
        axios.get('http://localhost:4242/genres/browseAll')
        .then((movie) => {
            console.log(movie.data);
            setMovieData(movie.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    //ideally have a dropdown menu to change which genre you want to see rather than going back and picking over and over
    //CSS could help with CRAP properties, specifically alignment
    return(
        <div>
            <div className="goBack">
                <Link to="/genres">Go Back To Genres</Link>
            </div>
            <h1>{genre.toUpperCase()} MOVIES</h1>
            
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
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    
                </div>
                
            ))}
            
        </div>
    )
}