import {useContext,useEffect, useState} from 'react';
import './Create.css';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../../TodoContext/TodoContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

const Create = () => {
const location = useLocation();

  const {
    register,
    handleSubmit,
    formState:{isSubmitting,errors,isDirty},
    reset
  } = useForm();
 
  useEffect(()=>{
    if(location.state?.todo){
      reset(location.state.todo);
    }
  },[location.state,reset])
  const {todos,setTodos} = useContext(TodoContext);
  const navigate = useNavigate();

  const onSubmit = (data)=>{
    const isEditing  = location.state?.todo;
    if(isEditing){
      const updatedTodos = todos.map(todo=> todo.id ===location.state.todo.id?{...todo,...data}:todo)
      setTodos(updatedTodos)
    }
    else{
      const newTodo ={
        id : uuidv4(),
        heading:data.heading,
        description : data.description,
        date : data.date,
        completed:false,
      };
      setTodos([...todos,newTodo])
    }
    reset();
    navigate('/alltodos/all')
    
  }
  // got it
const handleCancel = ()=>{
  if(isDirty){
    const confirmLeave = window.confirm("You have unsaved changes.Are you sure you want to cancel?")
    if(!confirmLeave) return;
  }
  navigate('/alltodos/all')

}
  return (
    <div className='createTodoContainer'>
      <div className='text-gray-400 text-2xl rounded-2xl pb-3 '><h2>{location.state?.todo?"Edit Your Todo":"CREATE YOUR TODO"}</h2></div>
      {/* my form */}
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='form-group'>
              <label htmlFor="heading">Heading of your Todo</label>
              <input  type="text"  {...register("heading",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"}})}/>
            {errors.heading && <p className='text-red-800'>{errors.heading.message}</p> }      
          </div>

          <div className='form-group'>
              <label htmlFor="description">Description of your Todo</label>
              <textarea  {...register("description",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"},rows:10,cols:50})}/>
               {errors.description && <p className='text-red-800'>{errors.description.message}</p> } 
          </div>

          <div className='form-group'>
              <label htmlFor="date">Due Date</label>
              <input type="date"  {...register("date",{required:{value:true,message:"This field is Mandatory"}})}/>
               {errors.date && <p className='text-red-800'>{errors.date.message}</p> } 
          </div>
        <div className="formbtns flex  gap-2 justify-center pt-2">
          <button className='form-submit-btn' type='submit' disabled={isSubmitting}>Submit</button>
          <button type='button' className='form-submit-btn' onClick={handleCancel}>
            Cancel
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
