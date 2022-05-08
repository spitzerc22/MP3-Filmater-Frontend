import axios from 'axios'

class frontAction {
    getAll = (genre) => {
        return axios.get(`http://localhost:4242/genres/${genre}`)
    }

    getMovie = (genre, id) => {
        return axios.get(`http://localhost:4242/genres/${genre}/${id}`)
    }

    createMovie = (data) => {
        return axios.post(`http://localhost:4242/genres/submit`, data)
    }

    updateMovie = (genre, id, data) => {
        return axios.post(`http://localhost:4242/genres/${genre}/${id}`, data)
    }
    
    deleteMovie = (genre, id, data) => {
        return axios.delete(`http://localhost:4242/genres/${genre}/${id}`, data)
    }
}

export default new frontAction()