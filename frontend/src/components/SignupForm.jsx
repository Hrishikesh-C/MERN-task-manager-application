// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';
// import validateManyFields from '../validations';
// import Input from './utils/Input';
// import Loader from './utils/Loader';

// const SignupForm = () => {

//   const [formErrors, setFormErrors] = useState({});
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [fetchData, { loading }] = useFetch();
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setFormData({
//       ...formData, [e.target.name]: e.target.value
//     });
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     const errors = validateManyFields("signup", formData);
//     setFormErrors({});
//     if (errors.length > 0) {
//       setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
//       return;
//     }

//     const config = { url: "/auth/signup", method: "post", data: formData };
//     fetchData(config).then(() => {
//       navigate("/login");
//     });

//   }

//   const fieldError = (field) => (
//     <p className={`mt-1 text-pink-600 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
//       <i className='mr-2 fa-solid fa-circle-exclamation'></i>
//       {formErrors[field]}
//     </p>
//   )

//   return (
//     <>
//       <form className='m-auto my-16 max-w-[500px] p-8 bg-white border-2 shadow-md rounded-md'>
//         {loading ? (
//           <Loader />
//         ) : (
//           <>
//             <h2 className='text-center mb-4'>Welcome user, please signup here</h2>
//             <div className="mb-4">
//               <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500">Name</label>
//               <Input type="text" name="name" id="name" value={formData.name} placeholder="Your name" onChange={handleChange} />
//               {fieldError("name")}
//             </div>

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
//               <Link to="/login" className='text-blue-400'>Already have an account? Login here</Link>
//             </div>
//           </>
//         )}

//       </form>
//     </>
//   )
// }

// export default SignupForm
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import validateManyFields from '../validations';
import Input from './utils/Input';
import Loader from './utils/Loader';

const SignupForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [fetchData, { loading }] = useFetch();
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("signup", formData);
    setFormErrors({});
    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
      return;
    }

    const config = { url: "/auth/signup", method: "post", data: formData };
    fetchData(config).then(() => {
      navigate("/login");
    });
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
            <h2 className='text-center mb-6 text-2xl font-bold animate-slideIn'>Create an account</h2>
            
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-300">Name</label>
              <Input type="text" name="name" id="name" value={formData.name} placeholder="Your name" onChange={handleChange} className="bg-gray-700 text-white" />
              {fieldError("name")}
            </div>

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

            <button className='w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-medium rounded-md transition-all duration-300 transform hover:scale-105' onClick={handleSubmit}>Sign Up</button>

            <div className='pt-4 text-center'>
              <Link to="/login" className='text-blue-400 hover:text-blue-500 transition-all'>Already have an account? Login here</Link>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default SignupForm;
