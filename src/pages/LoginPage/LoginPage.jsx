import { useState } from "react";
import "./LoginPage.scss";
import { auth } from "@/config/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function LoginPage() {
  onAuthStateChanged(auth, (currentUser) => {
    // setUser(currentUser);
    console.log(currentUser);
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleUserLogin(e) {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login-main">
      <div className="login-main-div">
        <h1 className="login-h1">Login page</h1>
        <form className="login-form" onSubmit={(e) => handleUserLogin(e)}>

          <input className="login-email" placeholder="Please Enter Your E-Mail" onKeyUp={(e) => handleChange(e)} name="email" type="email" />
          <input className="login-password"
            onKeyUp={(e) => handleChange(e)}
            name="password"
            type="password"
          />
          <div className="submits-of-login">
            <input className="login-submit" type="submit" value="Login" />

            <button className="login-logout"
              onClick={() => {
                signOut(auth);
                console.log("clicked");
              }}
            >
              Logout
            </button>
          </div>
        </form>


      </div>
    </div>
  );
}

export default LoginPage;
