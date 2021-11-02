import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  console.log(error);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);

    return (
            <div className="register">
              <div className="register__container">
                  <h1>Register</h1>
                  <form>
                    <h2>Name</h2>
                    <input
                        type="text"
                        className="register__textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                  onClick={signInWithGoogle}
                >
                  Register with Google
                </button>
        
                <p className="register__inf">
                  Already have an account?
                </p>
                <button className='register__registerButton'><Link to="/login">Sign in</Link></button>
              </div>
            </div>
          );
}

export default Register
