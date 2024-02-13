import React from "react";
import Footer from "../Components/Footer";


function Login() {
  {
    return (
      <>
        <Loginhero1 />
      </>
    );
  }
  
}

const Loginhero1 = () => {
  const Loginleftside = () => {
    return (
      <div className="loginleft-wrapper">
          
      </div>
    );
  };

  const Loginrightside = () => {
    return (
      <div className="loginright-wrapper">
        <h1>Welcome Back</h1>
        <form action="submit">
          

            
            <label>Phone Number or Email</label><br/>
            <input className="input-a" type="text"></input><br/>

            <label>Password</label><br/>
            <input className="input-a" type="password"></input><br/>
            <div className="checkBox1">
              <input className="www" type="checkbox"></input>
            
            
              <label>I Agree to all Terms and Privacy Policy</label>

              <a className="forgot" href="/Login">Forgotten Password?</a>

            </div>
            <a href="/SignUp">
              <button className=" loginherobtn btn signupbtn w3-hide-small">Log In</button>
            </a>
            <div className="login-lastpart">
              <h4 >
                  Already Have an Account?
              </h4>
              <a href="/SignUp">Sign Up</a>


            </div>
            
            
            
      </form>

      </div>
    );
  };


  return (
  
    <div className="loginWrapper">
        <div className="loginonlyWrapper">
          <Loginleftside />
          <Loginrightside />
        </div>
        <div>
          <Footer />
        </div>
    </div>
    
    
    );
  };
export default Login;
