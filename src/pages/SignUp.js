import React from "react";
import Footer from "../Components/Footer";

function SignUp() {
  {
    return (
      <>
        <SignUphero1 />
      </>
    );
  }
  
}

const SignUphero1 = () => {
  const Signupleftside = () => {
    return (
      <div className="signupleft-wrapper">
          
      </div>
    );
  };

  const Signuprightside = () => {
    return (
      <div className="signupright-wrapper">
        <h1>Create Account</h1>
        <form action="submit">
          

            <label >Name</label><br/>
            <input className="input-a" type="text" placeholder="Write your full name.."></input><br/>

            <label>Phone Number or Email</label><br/>
            <input className="input-a" type="text"></input><br/>

            <label>Password</label><br/>
            <input className="input-a" type="password"></input><br/>
            <div className="checkBox1">
              <input className="www" type="checkbox"></input>
            
            
              <label>I Agree to all Terms and Privacy Policy</label><br/>

            </div>
            <a href="/SignUp">
              <button className=" signupherobtn btn signupbtn w3-hide-small">Sign Up</button>
            </a>
            <div className="lastpart">
              <h4 >
                  Already Have an Account?
              </h4>
              <a href="/Login">Log In</a>


            </div>

            
            
            
      </form>

      </div>
    );
  };
  // const Footer = () => {
  //   return (
  //     <div className="footerhero">
  //       <div className="footerWrapper">
  //         <div className="footertop">
  //           <div className="footerfirstbox">
  //             <div className="firstboxpic"></div>
  //             <div className="firstboxdetails">
  //               <h1 className="same">
  //                 Alanda's vision is for a future in which everyone in Nigeria
  //                 has access to efficient and economical land acquisition. Our
  //                 offerings enable you to purchase land and pay for it
  //                 immediately or monthly, as we also provide flexible payment
  //                 plans, land banking, and land resale. How may we assist you
  //                 today?
  //               </h1>
  //             </div>
  //           </div>
  //           <div className="footersecondbox">
  //             <h1 className="head">Why Alanda?</h1>
  //             <h1 className="same ">Buy a Land</h1>
  //             <h1 className="same ">Resale Land</h1>
  //             <h1 className="same ">Land Banking</h1>
  //           </div>

  //           <div className="footerthirdbox">
  //             <h1 className="head">Comapany</h1>
  //             <h1 className="same ">About Us</h1>
  //             <h1 className="same ">FAQs</h1>
  //           </div>
  //           <div className="footerfourthbox">
  //             <h1 className="head">Contact Us</h1>
  //             <h1 className="same ">08181569567</h1>
  //             <h1 className="same ">Official.alanda@gmail.com</h1>
  //           </div>
  //         </div>

  //         <div className="icons">
  //           <div className="iconswrapper">
  //             <a href="" className="fb"></a>
  //             <a href="" className="instagram"></a>
  //             <a href="" className="x"></a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  

  return (
  
    <div className="signupWrapper" >
        <div className="onlyWrapper">
        <Signupleftside />
        <Signuprightside />
        
      </div>
      <div>
      <Footer />
      </div>

    </div>
    
    );
  };
export default SignUp;
