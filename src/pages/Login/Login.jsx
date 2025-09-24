import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signUp } from '../../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (signState === "Sign Up") {
        if (!name.trim()) {
          alert("Please enter your name");
          setLoading(false);
          return;
        }
        await signUp(name, email, password);
        alert("Account created successfully!");
        navigate('/'); 
      } else {
        await login(email, password);
        alert("Logged in successfully!");
        navigate('/'); 
      }
    } catch (error) {
     
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Email is already registered. Please use a different email or sign in.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters long.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email. Please sign up first.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid email or password. Please check your credentials.";
      }
      
      alert(errorMessage);
    }
    
    setLoading(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='login'>
      <img src={logo} alt="Logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <input 
              type="text" 
              placeholder='Enter your name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input 
            type="email" 
            placeholder='Enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder='Enter your password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
          <button 
            type="submit" 
            className="login-form-button"
            disabled={loading}
          >
            {loading ? 'Loading...' : signState}
          </button>
          <div className="form-help">
            <label className="remember">
              <input type="checkbox" /> Remember Me
            </label>
            <span 
              className="need-help"
              onClick={() => navigate('/')}
            >
              Back to Home
            </span>
          </div>
        </form>
        
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => {
                setSignState("Sign Up");
                resetForm();
              }}>
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => {
                setSignState("Sign In");
                resetForm();
              }}>
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;