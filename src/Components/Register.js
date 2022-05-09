import {Link} from 'react-router-dom'
import frontendAction from '../routes/frontendAction'

export default function Register() {
    const submit = () => {
        frontendAction.createUser({
            username: document.body.username,
            password1: document.body.password1,
            password2: document.body.password2
        })
        .then((res) => {
            console.log(res, "Success!")
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div>
            <div className="registerContainer">
                <form>
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
    )
}

