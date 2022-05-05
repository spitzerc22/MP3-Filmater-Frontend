import {Link} from 'react-router-dom'


export default function Login() {
    return(
        <div>
            <div className="loginContainer">
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
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            className=""
                            type="text"
                            id="password"
                            name="password"
                            required
                        />
                    </div>
                    <input className="btn" type="submit" value="Login"/>
                </form>
                <hr/>

            <div className="registerHere">
                <h6>Don't have an account? Register <Link to="/login/new">here!</Link></h6>
            </div>
            </div>

        </div>
    )
}