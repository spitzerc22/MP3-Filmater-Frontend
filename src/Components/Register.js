import {Link} from 'react-router-dom'
import Login from './Login'

export default function Register() {
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
                            type="text"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="password2">
                        <label htmlFor="password2">Re-Enter Password</label>
                        <input
                            className=""
                            type="text"
                            id="password2"
                            name="password2"
                            required
                        />
                    </div>
                    <input className="btn" type="submit" value="Login"/>
                </form>
                <hr/>
                
                <div className="goBack">
                    <h6>Go back to Login <Link to="/login">here!</Link></h6>
                </div>
            </div>
        </div>
    )
}

