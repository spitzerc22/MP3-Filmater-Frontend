import {useState, useEffect} from 'react'
import frontendAction from '../routes/frontendAction'
import ShowMovie from './ShowMovie'

export default function MovieGallery(props) {
    let [movieData, setMovieData] = useState([])

    useEffect(() => {
        frontendAction.getAll().then(res => {setMovieData(res.data)})
    }, [])

    //check and organize by genre
    const genre = props

    if(genre) {

    }
    return(
        <div>
            <h1></h1>
        </div>
    )
}