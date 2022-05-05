import {useEffect, useState} from 'react'

export default function Submission() {
    // let [searchTerm, setSearchTerm] = useState('')
    // let [data, setData] = useState([])
        
    // useEffect(() => {
    //     const API_URL = process.env.API_URL
    //     if (searchTerm) {
    //     const fetchData = async () => {
    //         const response = await fetch(API_URL + searchTerm)
    //         const resData = await response.json()
    //         if(resData.results.length > 0) {
    //         setData(resData.results)
    //         }
    //     }
    //     fetchData()
    // }
    // }, [searchTerm])
   
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
                <button>Submit</button>
            </form>
            
        </div>
    )
}