// import React from 'react'
// import Navbar from '../components/Navbar';

// const MainLayout = ({ children }) => {
//   return (
//     <>
//       <div className='relative bg-gray-50 h-screen w-screen overflow-x-hidden'>
//         <Navbar />
//         {children}
//       </div>
//     </>
//   )
// }

// export default MainLayout;
import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative min-h-screen w-screen bg-[#121212] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 flex flex-col items-center justify-start w-full px-4 py-8">
          <div className="w-full max-w-4xl bg-[#1e1e1e] shadow-md rounded-lg p-6 border border-gray-800">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
