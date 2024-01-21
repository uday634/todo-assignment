import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Update = (props) => {
  const [Inputs, setInputs] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    setInputs({
      title: props.update.title,
      body: props.update.body,
    });
  }, [props.update.title, props.update.body]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/list/updateTask/${props.update._id}`, Inputs);
      console.log(response)
      toast.success('Updated successfully')
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.error('Error updating task. Status:', response.status);
        toast.error('Updated successfully')
      }
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Updated successfully')
    }
  
    props.display("none");
  };
  

  return (
    <>
    <ToastContainer />
      <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h3>Update Your Task</h3>
      </div>
      <input
        type="text"
        placeholder="UPDATE TITLE"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        type="text"
        placeholder="UPDATE BODY"
        className="todo-inputs w-100 p-3"
        name="body"
        value={Inputs.body}
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button
          className="btn btn-dark my-4 mx-3"
          onClick={() => {
            props.display("none");
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Update;
