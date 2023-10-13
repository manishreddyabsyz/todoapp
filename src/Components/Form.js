import React, { useState } from "react";
import "../App.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import TextField from "@mui/material/TextField";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const[edtitableText,setEditableText]=useState("")
  const[itemIndex,setItemIndex]=useState(0)
  const [date,setDate]=useState("")

  const [open, setOpen] = React.useState(false);
  const handleOpen = (name) => {
    setOpen(true);
    setEditableText(name)
  }
  const handleClose = (id) => {
   

    setOpen(false);
    todos.map((arr,index)=>index===id?todos[index].name=edtitableText:todos)
    
    

  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      
      name: task,
      checked: false,
      date:date
    };
    if(task===""){
      alert("Input cant be empty")
    }
    else if(date===""){
      alert("select a date")
    }  
  
    else{

    
    setTodos([...todos, newTask]);
    setTask("");
    setDate("")
    }
  };
 

  //delete

  const deleteHandler=(id)=>{
    const updatedTodo=todos.filter((item,index)=>index!==id)
    setTodos(updatedTodo)

  }

  const getIndex=(id)=>{
    console.log(id)
      setItemIndex(id)
  }
  console.log(todos)


  //checkboxhandle 
  const handleCheckbox=(id)=>{
    const modifyTodo=todos.map((todo,index)=>index===id?{...todo,checked:!todo.checked}:todo)
    setTodos(modifyTodo)
    
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="input-btn">
          <input
            type="text"
            id="task"
            value={task}
            className="input"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <input type="date" className="date-input" onChange={(e)=>setDate(e.target.value)}/>
          <button className="add-btn" type="submit">
            <AddBoxIcon />
          </button>
        </div>
      </form>
      <ul>
        {todos.length !== 0 &&
          todos.map((todo,index) => {
            return (
              <li key={index} className="todo">
                <input type="checkbox" checked={todo.checked} onChange={()=>handleCheckbox(index)}/>
                <span  className={todo.checked ? "checkbox":""}>{todo.name}</span>
                <span className="date">{todo.date}</span>
                <div>
                  <Button onClick={()=>handleOpen(todo.name)} style={{ marginBottom: "18px" }}>
                    <ModeEditOutlineOutlinedIcon style={{ color: "aqua" }} onClick={()=>getIndex(index)} />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue={edtitableText}
                          onChange={(e)=>setEditableText(e.target.value)}
                        />
                       
                      </Typography>
                      <Button style={{backgroundColor:"blue",padding:"5px",color:"white",marginTop:"10px"}} onClick={()=>handleClose(itemIndex)}>Save</Button>
                    </Box>
                  </Modal>

                  <button className="delete-btn" onClick={()=>deleteHandler(index)}>
                    <DeleteForeverOutlinedIcon style={{ fontSize: "30px" }} />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Form;
