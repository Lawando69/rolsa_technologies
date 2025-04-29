// import "./Authentication.css";
// import React, {useState} from "react";

// export default function Authentication(){
//     const [login, setLogin] = useState("");
//     const [register, setRegister] = useState("");
//     const [isRegister, setIsRegister] = useState(false);

//     const toggleForm = (e) => {setRegister(e.target.value);}

//     return(
//         <div className="auth_container">
//             <div className="auth_holder">
//                 {/* NOTE: Login Section */}
//                 <div className="login_container">
//                     <h1>Login</h1>
//                     <div className="login_content">
//                         <label> Email
//                             <input type="email" placeholder="Email Address" className="login_input"/>
//                         </label>
//                     </div>
//                     <div className="login_content">
//                         <label> Password
//                             <input type="password" placeholder="Password" className="login_input"/>
//                         </label>
//                     </div>
//                     <div className="login_content">
//                         {/* TODO: Implement a forgot password page */}
//                         <a href="/forgotpass">Forgot Password?</a>
//                     </div>
//                     {/* TODO: Give submit button a onClick method */}
//                     <button type="submit" onClick={() => console.log("Loged in")}>Login</button>
//                 </div>
//                 {/* NOTE: Registration Section */}
//                 <div className="registration_container">
//                     <h1>Register</h1>
//                     <div className="registration_content">
//                         <label> Fullname
//                             <input type="text" placeholder="Full Name" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Date of Birth
//                             <input type="date" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Email
//                             <input type="email" placeholder="Email Address" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label>Confirm Email
//                             <input placeholder="Confirm Email Address" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Passcode
//                             <input type="text" placeholder="Passcode" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Password
//                             <input type="password" placeholder="Password" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Confirm Password
//                             <input placeholder="Confirm Password" className="register_input"/>
//                         </label>
//                     </div>
//                     <div className="registration_content">
//                         <label> Accepting T&Cs
//                             <input type="checkbox" className="register_input"/>
//                         </label>
//                     </div>
//                     {/* TODO: Give todo button a onclick method */}
//                     <button type="submit" onClick={() => console.log("Registered")}>Register</button>

//                     {
//                         isRegister ? login : register
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }