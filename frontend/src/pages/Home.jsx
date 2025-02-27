// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Tasks from '../components/Tasks';
// import MainLayout from '../layouts/MainLayout';

// const Home = () => {

//   const authState = useSelector(state => state.authReducer);
//   const { isLoggedIn } = authState;

//   useEffect(() => {
//     document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Zidio task management";
//   }, [authState]);



//   return (
//     <>
//       <MainLayout>
//         {!isLoggedIn ? (
//           <div className='bg-black text-white h-[40vh] py-8 text-center'>
//             <h1 className='text-2xl'> Welcome to Task Manager App</h1>
//             <Link to="/signup" className='mt-10 text-xl block space-x-2 hover:space-x-4'>
//               <span className='transition-[margin]'>Join now to manage your tasks</span>
//               <span className='relative ml-4 text-base transition-[margin]'><i className="fa-solid fa-arrow-right"></i></span>
//             </Link>
//           </div>
//         ) : (
//           <>
//             <h1 className='text-lg mt-8 mx-8 border-b border-b-gray-300'>Welcome {authState.user.name}</h1>
//             <Tasks />
//           </>
//         )}
//       </MainLayout>
//     </>
//   )
// }

// export default Home
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Zidio Task Management";
  }, [authState]);

  return (
    <>
<div className='relative min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500'>
<MainLayout>
          {!isLoggedIn ? (
            <div className='bg-black bg-opacity-50 text-white h-[40vh] py-8 text-center flex flex-col justify-center items-center relative'>
              <h1 className='text-4xl font-bold mb-6 animate-fadeIn'>Welcome to Task Manager App</h1>
              <Link 
                to="/signup" 
                className='mt-4 text-xl px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 animate-bounce'
              >
                <span className='transition-transform transform hover:translate-x-1'>Join now to manage your tasks</span>
                <span className='text-lg'><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          ) : (
            <div className='mx-8 mt-8 animate-slideIn bg-black bg-opacity-50 p-6 rounded-lg'>
              <h1 className='text-2xl font-semibold border-b border-gray-300 pb-2 text-white'>Welcome, {authState.user.name}</h1>
              <div className='mt-6'>
                <Tasks />
              </div>
            </div>
          )}
        </MainLayout>
      </div>
    </>
  );
};

export default Home;
