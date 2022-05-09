import {Link} from 'react-router-dom'
import {useState, useRef} from 'react'
import frontendAction from '../routes/frontendAction'

export default function Register() {
    const userRef = useRef()
    
    const [user, setUser] = useState('')
    const [pswd, setPswd] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        //prevent window auto refresh
        e.preventDefault()
        try{
            const response = await frontendAction.createUser(JSON.stringify({username: user, password: pswd}), {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            })
            console.log(response)
            //clears input fields
            setUser('')
            setPswd('')
            //for ternary
            setSuccess(true)
        } catch(err) {
            console.log(err)
        }
        
    }
    return(
        <>
            {success ? (
                <div>
                    <h1>You're all set!</h1>
                    <hr />
                    <h4>Start browsing <Link to="/genres">here!</Link></h4>
                </div>
            ) : (
        <div>
            <div className="registerContainer">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input
                            className=""
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="password1">
                        <label htmlFor="password1">Password</label>
                        <input
                            className=""
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="password2">
                        <label htmlFor="password2">Re-Enter Password</label>
                        <input
                            className=""
                            type="password"
                            id="password2"
                            name="password2"
                            required
                        />
                    </div>
                    <button>Register</button>
                </form>
                <hr/>
                
                <div className="goBackLogin">
                    <h6>Go back to Login <Link to="/login">here!</Link></h6>
                </div>
            </div>
        </div>
            )}
            </>
    )
}

