// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import validateManyFields from '../validations';
// import Input from './utils/Input';
// import { useDispatch, useSelector } from "react-redux";
// import { postLoginData } from '../redux/actions/authActions';
// import Loader from './utils/Loader';
// import { useEffect } from 'react';

// const LoginForm = ({ redirectUrl }) => {

//   const [formErrors, setFormErrors] = useState({});
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();

//   const authState = useSelector(state => state.authReducer);
//   const { loading, isLoggedIn } = authState;
//   const dispatch = useDispatch();


//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate(redirectUrl || "/");
//     }
//   }, [authState, redirectUrl, isLoggedIn, navigate]);



//   const handleChange = e => {
//     setFormData({
//       ...formData, [e.target.name]: e.target.value
//     });
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     const errors = validateManyFields("login", formData);
//     setFormErrors({});
//     if (errors.length > 0) {
//       setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
//       return;
//     }
//     dispatch(postLoginData(formData.email, formData.password));
//   }



//   const fieldError = (field) => (
//     <p className={`mt-1 text-pink-600 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
//       <i className='mr-2 fa-solid fa-circle-exclamation'></i>
//       {formErrors[field]}
//     </p>
//   )

//   return (
//     <>
//       <form className='m-auto my-16 max-w-[500px] bg-white p-8 border-2 shadow-md rounded-md'>
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//             <h2 className='text-center mb-4'>Welcome user, please login here</h2>
//             <div className="mb-4">
//               <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
//               <Input type="text" name="email" id="email" value={formData.email} placeholder="youremail@domain.com" onChange={handleChange} />
//               {fieldError("email")}
//             </div>

//             <div className="mb-4">
//               <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
//               <Input type="password" name="password" id="password" value={formData.password} placeholder="Your password.." onChange={handleChange} />
//               {fieldError("password")}
//             </div>

//             <button className='bg-primary text-white px-4 py-2 font-medium hover:bg-primary-dark' onClick={handleSubmit}>Submit</button>

//             <div className='pt-4'>
//               <Link to="/signup" className='text-blue-400'>Don't have an account? Signup here</Link>
//             </div>
//           </>
//         )}
//       </form>
//     </>
//   )
// }

// export default LoginForm
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validateManyFields from '../validations';
import Input from './utils/Input';
import { useDispatch, useSelector } from "react-redux";
import { postLoginData } from '../redux/actions/authActions';
import Loader from './utils/Loader';

const LoginForm = ({ redirectUrl }) => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const authState = useSelector(state => state.authReducer);
  const { loading, isLoggedIn } = authState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectUrl || "/");
    }
  }, [authState, redirectUrl, isLoggedIn, navigate]);

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("login", formData);
    setFormErrors({});
    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
      return;
    }
    dispatch(postLoginData(formData.email, formData.password));
  }

  const fieldError = (field) => (
    <p className={`mt-1 text-red-400 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
      <i className='mr-2 fa-solid fa-circle-exclamation'></i>
      {formErrors[field]}
    </p>
  );

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black animate-pulse opacity-50"></div>

      {/* Form Container */}
      <form className='relative z-10 m-auto max-w-[500px] bg-gray-800 text-white p-8 border border-gray-700 shadow-xl rounded-md animate-fadeIn backdrop-blur-md'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className='text-center mb-6 text-2xl font-bold animate-slideIn'>Welcome, please login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-300">Email</label>
              <Input type="text" name="email" id="email" value={formData.email} placeholder="youremail@domain.com" onChange={handleChange} className="bg-gray-700 text-white" />
              {fieldError("email")}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-gray-300">Password</label>
              <Input type="password" name="password" id="password" value={formData.password} placeholder="Your password.." onChange={handleChange} className="bg-gray-700 text-white" />
              {fieldError("password")}
            </div>

            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-medium rounded-md transition-all duration-300 transform hover:scale-105' onClick={handleSubmit}>Login</button>

            <div className='pt-4 text-center'>
              <Link to="/signup" className='text-blue-400 hover:text-blue-500 transition-all'>Don't have an account? Sign up here</Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
