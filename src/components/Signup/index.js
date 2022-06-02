// import React, { useState } from 'react';

// export default function Signup() {

//     const [signup, setSignup] = useState({
//         username: "",
//         password: "",
//         chickenName: ""
//     })

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setSignup({
//             ...signup,
//             [name]: value
//         });
//     };

//     const handleFormSubmit = event => {
//         event.preventDefault();
//         API.signup(signup)
//           .then(res => {
//             // what to do with response data
//             console.log(res.data);
//             window.location = "/";
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       };

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <section className='pagecard'>
//                     <input id='newUser' type='text' placeholder='Username' onChange={handleInputChange}></input>
//                     <input id='newPassword' type='text' placeholder='Password' onChange={handleInputChange}></input>
//                     <input id='passwordConfirm' type='text' placeholder='Confirm Password' onChange={handleInputChange}></input>
//                     <input id='chickenName' type='text' placeholder='Name Your chicken!' onChange={handleInputChange}></input>
//                     <button className='submitButton' href="/">Submit</button>
//                 </section>
//             </form>
//         </div>
//     )
// }