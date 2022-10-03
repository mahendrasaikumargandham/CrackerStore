import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub
} from "../firebase";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  console.log(setName);
  console.log(error);
  const register = () => {
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading, history]);

    return (
            <div className="register">
              <div className="register__container">
                  <h1>Enter</h1>
                  <form>
                    <h2>E mail</h2>
                    <input
                        type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h2>Password</h2>
                    <input
                        type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <button className='login__signInButton' onClick={register}>
                  Register
                </button>
                <p className="register__inf">
                  OR
                </p>
                <button
                  className="login__signInWithGoogle"
                  onClick={signInWithGithub}
                >
                  <p>Enter with GitHub</p>
                </button>
                <button
                  className="login__signInWithGoogle"
                  onClick={signInWithGoogle}
                >
                  <p>Enter with Google</p>
                </button>
{/*         
                <p className="register__inf">
                  Already have an account?
                </p>
                <button className='register__registerButton'><Link to="/login">Sign in</Link></button> */}
              </div>
            </div>
          );
}

export default Register
