// import React, { useCallback, useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';
// import Loader from './utils/Loader';
// import Tooltip from './utils/Tooltip';

// const Tasks = () => {

//   const authState = useSelector(state => state.authReducer);
//   const [tasks, setTasks] = useState([]);
//   const [fetchData, { loading }] = useFetch();

//   const fetchTasks = useCallback(() => {
//     const config = { url: "/tasks", method: "get", headers: { Authorization: authState.token } };
//     fetchData(config, { showSuccessToast: false }).then(data => setTasks(data.tasks));
//   }, [authState.token, fetchData]);

//   useEffect(() => {
//     if (!authState.isLoggedIn) return;
//     fetchTasks();
//   }, [authState.isLoggedIn, fetchTasks]);


//   const handleDelete = (id) => {
//     const config = { url: `/tasks/${id}`, method: "delete", headers: { Authorization: authState.token } };
//     fetchData(config).then(() => fetchTasks());
//   }


//   return (
//     <>
//       <div className="my-2 mx-auto max-w-[700px] py-4">

//         {tasks.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-xl'>Your tasks ({tasks.length})</h2>}
//         {loading ? (
//           <Loader />
//         ) : (
//           <div>
//             {tasks.length === 0 ? (

//               <div className='w-[600px] h-[300px] flex items-center justify-center gap-4'>
//                 <span>No tasks found</span>
//                 <Link to="/tasks/add" className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2">+ Add new task </Link>
//               </div>

//             ) : (
//               tasks.map((task, index) => (
//                 <div key={task._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
//                   <div className='flex'>

//                     <span className='font-medium'>Task #{index + 1}</span>

//                     <Tooltip text={"Edit this task"} position={"top"}>
//                       <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-green-600 cursor-pointer'>
//                         <i className="fa-solid fa-pen"></i>
//                       </Link>
//                     </Tooltip>

//                     <Tooltip text={"Delete this task"} position={"top"}>
//                       <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(task._id)}>
//                         <i className="fa-solid fa-trash"></i>
//                       </span>
//                     </Tooltip>

//                   </div>
//                   <div className='whitespace-pre'>{task.description}</div>
//                 </div>
//               ))

//             )}
//           </div>
//         )}
//       </div>
//     </>
//   )

// }

// export default Tasks
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './utils/Loader';
import Tooltip from './utils/Tooltip';

const Tasks = () => {
  const authState = useSelector((state) => state.authReducer);
  const [tasks, setTasks] = useState([]);
  const [fetchData, { loading }] = useFetch();

  const fetchTasks = useCallback(() => {
    const config = { url: '/tasks', method: 'get', headers: { Authorization: authState.token } };
    fetchData(config, { showSuccessToast: false }).then((data) => setTasks(data.tasks));
  }, [authState.token, fetchData]);

  useEffect(() => {
    if (!authState.isLoggedIn) return;
    fetchTasks();
  }, [authState.isLoggedIn, fetchTasks]);

  const handleDelete = (id) => {
    const config = { url: `/tasks/${id}`, method: 'delete', headers: { Authorization: authState.token } };
    fetchData(config).then(() => fetchTasks());
  };

  return (
    <>
      <div className="my-4 mx-auto w-full max-w-4xl px-6 py-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Task Header */}
        {tasks.length !== 0 && <h2 className="text-2xl text-white font-semibold mb-4">Your Tasks ({tasks.length})</h2>}

        {loading ? (
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-white">
                <span className="text-lg">No tasks found</span>
                <Link
                  to="/tasks/add"
                  className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  + Add New Task
                </Link>
              </div>
            ) : (
              tasks.map((task, index) => (
                <div
                  key={task._id}
                  className="bg-gray-900 text-white p-6 mb-4 rounded-lg shadow-md transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center">
                    <span className="font-medium text-lg">Task #{index + 1}</span>

                    <Tooltip text="Edit this task" position="top">
                      <Link to={`/tasks/${task._id}`} className="ml-auto text-green-400 hover:text-green-500 transition">
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>

                    <Tooltip text="Delete this task" position="top">
                      <span
                        className="ml-4 text-red-400 hover:text-red-500 cursor-pointer transition"
                        onClick={() => handleDelete(task._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>
                  </div>
                  <div className="mt-2 text-gray-300">{task.description}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
