

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from '../components/utils/Input';
import Loader from '../components/utils/Loader';
import useFetch from '../hooks/useFetch';
import MainLayout from '../layouts/MainLayout';
import validateManyFields from '../validations';

const Task = () => {
  const authState = useSelector(state => state.authReducer);
  const navigate = useNavigate();
  const [fetchData, { loading }] = useFetch();
  const { taskId } = useParams();

  const mode = taskId === undefined ? "add" : "update";
  const [task, setTask] = useState(null);
  const [formData, setFormData] = useState({
    description: ""
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    document.title = mode === "add" ? "Add Task" : "Update Task";
  }, [mode]);

  useEffect(() => {
    if (mode === "update") {
      const config = { url: `/tasks/${taskId}`, method: "get", headers: { Authorization: authState.token } };
      fetchData(config, { showSuccessToast: false }).then((data) => {
        setTask(data.task);
        setFormData({ description: data.task.description });
      });
    }
  }, [mode, authState, taskId, fetchData]);

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleReset = e => {
    e.preventDefault();
    setFormData({
      description: task.description
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateManyFields("task", formData);
    setFormErrors({});

    if (errors.length > 0) {
      setFormErrors(errors.reduce((total, ob) => ({ ...total, [ob.field]: ob.err }), {}));
      return;
    }

    const config = {
      url: mode === "add" ? "/tasks" : `/tasks/${taskId}`,
      method: mode === "add" ? "post" : "put",
      data: formData,
      headers: { Authorization: authState.token }
    };

    fetchData(config).then(() => navigate("/"));
  }

  const fieldError = (field) => (
    <p className={`mt-1 text-pink-600 text-sm ${formErrors[field] ? "block" : "hidden"}`}>
      <i className='mr-2 fa-solid fa-circle-exclamation'></i>
      {formErrors[field]}
    </p>
  )

  return (
    <MainLayout>
      <form className="m-auto my-16 max-w-3xl bg-[#1e1e1e] text-white p-8 border border-gray-800 shadow-md rounded-lg">
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className="text-center mb-4 text-2xl font-semibold">{mode === "add" ? "Add New Task" : "Edit Task"}</h2>
            <div className="mb-4">
              <label htmlFor="description" className="text-gray-300">Description</label>
              <Textarea type="description" name="description" id="description" value={formData.description} placeholder="Write here.." onChange={handleChange} className="bg-gray-900 text-white border border-gray-700 p-2 rounded-lg w-full focus:ring focus:ring-blue-500" />
              {fieldError("description")}
            </div>

            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 font-medium rounded-lg hover:bg-blue-700 transition-all duration-200" onClick={handleSubmit}>
                {mode === "add" ? "Add Task" : "Update Task"}
              </button>
              <button className="bg-red-500 text-white px-4 py-2 font-medium rounded-lg hover:bg-red-600 transition-all duration-200" onClick={() => navigate("/")}>
                Cancel
              </button>
              {mode === "update" && (
                <button className="bg-gray-600 text-white px-4 py-2 font-medium rounded-lg hover:bg-gray-700 transition-all duration-200" onClick={handleReset}>
                  Reset
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </MainLayout>
  );
}

export default Task;
