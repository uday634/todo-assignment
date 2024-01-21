import { useState, useEffect } from "react";
import TodoCard from "./TodoCards";
import Update from "./Update";
import "./Todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

let toUpdateArray = [];

const Todo = () => {
  const id = sessionStorage.getItem("id");
  const [Array, setArray] = useState([]);
  const [Inputs, setInputs] = useState({ title: "", body: "" });

  const del = async (Cardid) => {
    if(id){
      await axios
      .delete(`${window.location.origin}/list//deleteTask/${Cardid}`, {
        data: { id: id },
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Task is deleted");
      });
    }else{
      toast.error('Please SignUp first')
    }
    
  };

  const show = () => {
    const textarea = document.getElementById("textarea");
    if (textarea.style.display === "block") {
      textarea.style.display = "none";
    } else {
      textarea.style.display = "block";
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title === "" && Inputs.body === "") {
      toast.error("Please fill the title and body");
    } else {
      if (id) {
        await axios
          .post(`${window.location.origin}/list/addTask`, {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Task is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Task is Added");
        toast.error("Task is not saved");
      }
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  const update = (value) => {
    toUpdateArray = Array[value]
  }

  useEffect(() => {
    if(id){
      const fetch = async () => {
      await axios
        .get(`${window.location.origin}/list/getTasks/${id}`)
        .then((response) => {
          setArray(response.data.list);
        });
    }
    fetch();
    }else{
      toast.error('pleaseloginfirst')
    }    
  }, [submit]);

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50 p-1">
            <input
              onChange={change}
              value={Inputs.title}
              type="text"
              name="title"
              placeholder="TITLE"
              onClick={show}
              className="my-2 todo-inputs p-2"
            />
            <textarea
              onChange={change}
              value={Inputs.body}
              type="text"
              id="textarea"
              name="body"
              placeholder="BODY"
              className="p-2 todo-inputs"
              style={{ display: "none" }}
            />
          </div>
          <div className="w-50 d-flex justify-content-end">
            <button onClick={submit} className="home-btn px-2 py-1 mx-1 my-2">
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 col-10  mx-5 my-2" key={index}>
                    <TodoCard
                      title={item.title}
                      body={item.body}
                      id={item._id}
                      delid={del}
                      display={dis}
                      updateId = {index}
                      toBeUpdate= {update}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update">
        <div className="container ">
          <Update display={dis} update ={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;
