import React from 'react';
import './Create.css';
import { useForm } from 'react-hook-form';
const Create = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const heading = e.target.heading.value;
  //   const description = e.target.description.value;
  //   const date = e.target.date.value;

  //   console.log("Todo Submitted:", { heading, description, date });
  //   // You can also call context here if needed
  // };
  const {
    register,
    setError,
    watch,
    handleSubmit,
    formState:{isSubmitting,erros},

  } = useForm()

  const onSubmit = (data)=>{
    console.log(data)
  }

  return (
    <div className='createTodoContainer'>
      <div className='text-gray-400 text-2xl rounded-2xl pb-3 '><h2>CREATE YOUR TODO</h2></div>
      {/* my form */}
      <div className="form-container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <div className='form-group'>
              <label htmlFor="heading">Heading of your Todo</label>
              <input type="text" id='heading' {...register("heading",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"}})}/>
          </div>

          <div className='form-group'>
              <label htmlFor="description">Description of your Todo</label>
              <input type="text" id='description' {...register("description",{required:{value:true,message:"This field is Mandatory"},minLength:{value:3,message:"Min len should be 3"},rows:10,cols:50})}/>
          </div>

          <div className='form-group'>
              <label htmlFor="date">Due Date</label>
              <input type="date" id='date' {...register("date",{required:{value:true,message:"This field is Mandatory"}})}/>
          </div>

          <button className='form-submit-btn' type='submit'>Submit</button>
        </form>
        {/* ready-made form */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="heading">Heading of your Todo</label>
            <input type="text" id="heading" name="heading" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description of your Todo</label>
            <textarea id="description" name="description" rows={10} cols={50} required />
          </div>

          <div className="form-group">
            <label htmlFor="date">Due Date</label>
            <input type="date" id="date" name="date" required />
          </div>

          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
