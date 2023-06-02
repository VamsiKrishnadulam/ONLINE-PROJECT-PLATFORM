import React, { useState,useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";


function Navbar(props){

  const [showModal, setShowModal] = useState(false);

  const [username,setUsername]=useState("");
  const [password, setPassword] = useState("");

  const [errorPassword,setErrorPassword]=useState("");
  const [errorUsername,setErrorUsername]=useState("");
  const [emailError,setErrorEmail]=useState("");
  const [showPassword,setShowPassword]=useState("password");
  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };
  
  // const validatePassword=(password)=>{
  //   const pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //   return pattern.test(password);
  // }
  // const validateUsername=(username)=>{
  //   if(username.length<=5){
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }
  // const validateEmail=(email)=>{
  //   const pattern2=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   return pattern2.test(email);
  // }
  const setvalModelval=()=>{
   setShowModal(true);
    
  }
  const handleSubmitbtn=async(event)=>{
    event.preventDefault();
    //const userNameValidity=validateUsername(username);
    // const passwordValidity=validatePassword(password);
    // if (!passwordValidity){
    //   setErrorPassword("Enter valid password");
    // } else {
    //   setErrorPassword("");
    // }
    // if (!userNameValidity){
    //   setErrorUsername("Enter valid username");
    // }
    // else{
    //   setErrorUsername("");
    // }
    const LoginObj={
      username:username,
      password:password
    }
    
    console.log(JSON.stringify(LoginObj))
    // const response = await fetch("http://localhost:4000/api/auth/loginUser",{

    //   method:"POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(LoginObj)
    // });
    
    // const json=await response.json()
    // console.log(json)
    // if(json.success){
    //     Navigate("/")
    // }
    // else{
    //   alert("Invalid Credentials");
    // }
    try{
    const response=await Axios.post('http://localhost:4000/api/auth/loginUser',LoginObj)
    if(response.success){
      props.showAlert("Successfully Logged in","success");
      setShowModal(false);
    }
    Navigate("/");
    }
   catch(e){
    alert("enter valid credentials");
    setErrorPassword("Enter valid credentials ");
    
   }
  }

  const [UsernameSUP,setUsernameSUP]=useState('');
  const [EmailidSUP,setEmailidSUP]=useState('');
  const [FirstnameSUP,setFirstnameSUP]=useState('');
  const [LastnameSUP,setLastnameSUP]=useState('');
  const [PasswordSUP,setPasswordSUP]=useState('');

  const handleSubmitbtnSignup=async (event)=>{
    event.preventDefault();
    const Signupobj={
      UsernameSUP:UsernameSUP,
      EmailidSUP:EmailidSUP,
      FirstnameSUP:FirstnameSUP,
      LastnameSUP:LastnameSUP,
      PasswordSUP:PasswordSUP
    }
    console.log(Signupobj);
    // Axios.post('http://localhost:4000/api/auth/createuser',Signupobj).then(()=>{
    //   props.showAlert("Successfully Signed up","success");
    // })
    const response = await fetch("http://localhost:4000/api/auth/createuser",{

      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(Signupobj)
    });
    const json=await response.json()
    console.log(json)
    
    Navigate("/upload")
    
  }


  const Navigate = useNavigate();
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <b> OPFSRK </b>
            </a>
            <div
              className="d-flex justify-content-end "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <button
                    className="nav-link btn btn-dark Login"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal1"
                    onClick={setvalModelval}
                  >
                    LOG-IN
                  </button>
                </li>
                <li className="nav-item ">
                  <button
                    className="nav-link btn btn-dark Signup"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal2"
                  >
                    SIGN-UP
                  </button>
                </li>
                <li className="nav-item ">
                  <button
                    className="nav-link btn btn-dark Upload"
                    onClick={() => Navigate("/upload")}
                  >
                    UPLOAD
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {showModal && (
        <div className="">
        <div className="modal" id="myModal1">
          <div className="modal-dialog modal-me">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container d-flex justify-content-center">
                  <h3 className="modal-title">
                   Log-in
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                   
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <form onSubmit={handleSubmitbtn}>
                    <br />
                    <br />
                    <div className="input-group d-flex align-items-center">
                      <input
                        required
                        id="Username1"
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        onChange={handleOnChangeUsername}
                        value={username}
                        size="38"
                        
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <div className="container error_msg">
                     {errorUsername && <h5> {errorUsername} </h5> }
                    </div>

                    <br />
                    
                    <div id="Username-error" className="Username-error"></div>

                    <div className="input-group element ">
                      <input
                        required
                        id="password1"
                        type={showPassword}
                        className="form-control col-5"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChangePassword}
                        size="38"
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-lock"></i>
                      </span>
                      <br />
                      <div className="container error_msg">
                      {errorPassword && <h5> {errorPassword} </h5>}
                      </div>
                    </div>
                    <div>

                    </div>
                    <br />
                    <span id="password-error" className="password-error"></span>

                    <input
                      type="checkbox"
                      id="showPassword"
                      name="showPassword"
                      value="showPassword"
                      onClick={()=>{
                        if(showPassword==="password"){
                        setShowPassword("text");
                        }
                        else{
                          setShowPassword("password")
                        }
                      }}
                    />
                    <label htmlFor="showPassword"> <h6>&#160; SHOW PASSWORD  </h6></label>
                    
                    <br />
                    <button
                      className="btn btn-dark subbtn d-flex justify-content-center"
                      type="submit"
                      
                    >
                      LOG-IN
                    </button>
                    
                    <br />

                    <div>
                      Not a member?
                      <a href="/">SIGN-UP</a>
                    </div>
                  </form>

                  <div className="grid text-center bg-dark text-white"></div>
                </div>
              </div>

              <div className="modal-footer">
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        </div>
        )}
        <div className="modal" id="myModal2">
          <div className="modal-dialog modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                <div className="container d-flex justify-content-center">
                  <h4 className="modal-title">SIGN-UP</h4>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <div className="d-flex justify-content-center">
                  <form>
                    <br />
                    <div className="input-group ">
                      <input
                        required
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        
                        placeholder="Email-id"
                        size="38"
                        onChange={(e)=>{
                          setEmailidSUP(e.target.value)
                        }}
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <div id="email-error" className="email-error"></div>
                    <br />
                    <br />

                    
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e)=>{
                              setFirstnameSUP(e.target.value)
                            }}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e)=>{
                              setLastnameSUP(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                    

                    <br />
                    <br />
                    <div className="input-group ">
                      <input
                        id="Username2"
                        type="text"
                        className="form-control "
                        name="Username"
                        placeholder="Username"
                        size="38"
                        onChange={(e)=>{
                          setUsernameSUP(e.target.value)
                        }}
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <br />

                    <div id="Username-error" className="Username-error"></div>

                    <br />
                    <div className="input-group element">
                      <input
                        id="password2"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        size="38"
                        onChange={(e)=>{
                          setPasswordSUP(e.target.value)
                        }}
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <br />
                    <span id="password-error" className="password-error"></span>
                    <br />
                    <div className="input-group element">
                      <input
                        id="password3"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Re-enter Password"
                        size="38"
                      />
                      <span className="input-group-addon">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <br />
                    <span
                      id="Re-enter-error"
                      className="validpassword-error"
                    ></span>

                    <br />
                    <div></div>
                  </form>

                  <div className="grid text-center bg-dark text-white"></div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                  onClick={handleSubmitbtnSignup}
                  
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
export default Navbar;
