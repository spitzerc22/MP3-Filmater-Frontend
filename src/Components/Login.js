import {Link} from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import frontendAction from '../routes/frontendAction'

export default function Login() {
    const userRef = useRef()
    
    const [user, setUser] = useState('')
    const [pswd, setPswd] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        //prevent window auto refresh
        e.preventDefault()
        console.log(user, pswd)
        //clears input fields
        setUser('')
        setPswd('')
        //for ternary
        setSuccess(true)
    }

    return(
        //this ternary shows div based off successful login
        <>
            {success ? (
                <div>
                    <h1>You are logged in!</h1>
                    <hr />
                    <h4>Start browsing <Link to="/genres">here!</Link></h4>
                </div>
            ) : (

        <div>
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            ref={userRef}
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPswd(e.target.value)}
                            value={pswd}
                            required
                        />
                    </div>
                    <button>Login</button>
                </form>
                <hr/>

            <div className="registerHere">
                <h6>Don't have an account? Register <Link to="/login/new">here!</Link></h6>
            </div>
            </div>

        </div>
            )}
            </>
    )
}