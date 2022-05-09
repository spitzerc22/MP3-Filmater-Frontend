import frontendAction from '../routes/frontendAction'
import axios from 'axios'

export default function Submission() {
    
   const submit = () => {
       
    frontendAction.createMovie({
        title: document.body.title,
        genre: document.body.genre,
        releaseDate: document.body.releaseDate,
        description: document.body.description,
        pic: document.body.pic
    })
    .then((response) => {
        console.log(response, "Success!")
    })
    .catch(err => {
        console.log(err)
    })

      
   }
    return(
        <div className="formContainer">
            <form className="submitForm">
                <div className="genreForm">
                    <label htmlFor="genre">Genre</label>
                    <select name="genre" id="genre">
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                        <option value="family">Family</option>
                        <option value="horror">Horror</option>
                        <option value="scifi">SciFi</option>
                    </select>
                </div>
                <div className="titleForm">
                    <label htmlFor="title">Movie Title</label>
                    <input 
                        className=""
                        type="text"
                        id="title"
                        name="title"
                        required
                    />
                </div>
                <div className="movie_pic">
                    <label htmlFor='pic'>Picture</label>
                    <input
                        className=''
                        type='text'
                        id='pic'
                        name='pic'
                    />
                </div>
                <div className="dateForm">
                    <label htmlFor="releaseDate">Release Year</label>
                    <input
                        className=""
                        type="Number"
                        id="releaseDate"
                        name="releaseDate"
                        min="1940"
                    />
                </div>
                <div className="descriptionForm">
                    <label htmlFor="description">Description</label>
                    <input  
                        className=""
                        type="text"
                        id="description"
                        name="description"
                    />
                </div>
                <button onClick={submit}>Submit</button>
            </form>
            
        </div>
    )
}