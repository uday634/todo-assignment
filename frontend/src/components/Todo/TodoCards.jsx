import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = (props) => {
  const truncatedBody = props.body.slice(0, 77);

  const updatePanel = () => {
    console.log("hi");
    props.updatePanel();
  };

  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{props.title}</h5>
        <p className="todo-card-p">{truncatedBody}...</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          onClick={() => {
            props.display("block");
            props.toBeUpdate(props.updateId);
          }}
          className="d-flex justify-content-around align-items-center card-icons-head"
        >
          <GrDocumentUpdate className="card-icons" />
          Update
        </div>
        <div
          className="d-flex justify-content-around align-items-center card-icons-head text-danger"
          onClick={() => {
            props.delid(props.id);
          }}
        >
          <AiFillDelete className="card-icons del" />
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
