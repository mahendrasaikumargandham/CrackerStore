import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) history.push("/");
    }, [user, loading]);

    return (
        <div className="login">
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type='submit' onClick={() => signInWithEmailAndPassword(email, password)} className='login__signInButton'>Sign In</button>
                </form>
                <p className="login__inf">
                    OR
                </p>
                <button className="login__signInWithGoogle" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <p className="login__inf">
                    Haven't you signed yet?
                </p>

                <button className='login__registerButton'><Link to="/register">Create an account</Link></button>
            </div>
        </div>
    )
}

export default Login;
