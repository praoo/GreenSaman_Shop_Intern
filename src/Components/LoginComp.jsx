import React, { useState } from "react";

const LoginComp = ({onClickClose}) => {
    const [loginSwitch , setLoginSwitch] = useState(false);
    const [mainForm , setMainForm] = useState(false);
    const [formText , setFormText] = useState("Login to account");

    

    const handleSwtchLogin = () => {
        setLoginSwitch(!loginSwitch)
    
    }

    const handleForgotForm = () => {
        setMainForm(true)
        
    }   
    
  return (
    <>
      <section className="login-comp" onClick={onClickClose}>
        <div className="login-main-bx" onClick={(e) => e.stopPropagation()}>
            <div className={mainForm ? "main-form-handle-bx mainformactive" : "main-form-handle-bx"}>
        
                
          <div className={loginSwitch === true ? "login-bx loginswitchactive" : "login-bx"}>
            <h5>{ loginSwitch === true ?  "Register new account" :  mainForm === true ? "Password Reset" : "Login to account" }</h5>
            <p>
              Access to the most powerfull tool in the entire design and web
              industry.
            </p>

          <div className="login-form-bx">

            <form action="#">

            <div className="form-inpt-bx form-inpt-bx2 form-inpt-bx3">
                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                </div>

                <div className="form-inpt-bx form-inpt-bx2">
                    <input type="text" name="phone" id="phone" placeholder="Phone No." />
                </div>

                <div className="form-inpt-bx">
                    <input type="email" name="email" id="email" placeholder="E-mail Address" />
                </div>

                <div className="form-inpt-bx form-inpt-bx3">
                    <input type="text" name="password" id="password" placeholder="Password" />
                </div>

                <div className="login-btn-flex-bx">

                    <button className="submit-btn">
                        Login
                    </button>

                    <button className="forgt-paswrd-btn" onClick={() => handleForgotForm()}>
                        Forget Password?
                    </button>
                    
                </div>


                <h6 className="login-with-text">{ loginSwitch === true ? "or register with" : "or login with" }</h6>

                <div className="login-with-other-grid grid grid-two-col grid-gap">

                    <button className="login-with-btn">
                    <i class="fa-brands fa-facebook"></i>   Facebook
                    </button>

                    <button className="login-with-btn">
                    <i class="fa-brands fa-google-plus"></i>  Google
                    </button>
                    
                </div>


                <button className="regi-btn" onClick={() => handleSwtchLogin()}>
                { loginSwitch === true ? "Login to account" : "Register new account" }
                </button>
                
            </form>
            
          </div>
          </div>

          <button className="reset-password-btn">
            Send Reset Link
          </button>
          
          </div>

          <div className="close-form-btn" onClick={onClickClose}>
          <i class="fa-regular fa-circle-xmark"></i>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default LoginComp;
