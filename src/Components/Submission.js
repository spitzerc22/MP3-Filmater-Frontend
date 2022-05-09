import {useEffect, useState} from 'react'
import axios from 'axios'
import frontendAction from '../routes/frontendAction'

export default function Submission() {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: document.body.title,
            genre: document.body.genre,
            pic: document.body.pic,
            releaseDate: document.body.releaseDate,
            description: document.body.description
            
        }
        frontendAction.createMovie(data)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div className="formContainer">
            <form className="submitForm" onSubmit={handleSubmit}>
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
                <button value="submit">Submit</button>
            </form>
            
        </div>
    )
}