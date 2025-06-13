import { useForm } from 'react-hook-form'
const Create = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { isSubmitting,errors },
    

  } = useForm()
  const delay = (d)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d*1000);
    })
  }
  const onSubmit =  async (data) => {

    await delay(2)
    // let r = await fetch("http://localhost:3000/create",{
    //   method:'POST'
    //   ,headers:{
    //     "Content-Type" :"application/json"
    //   },
    //   body: JSON.stringify(data)
    // })
    // let res = await r.text()
    // console.log(data,res)
    
    console.log(data)
    // if(data.username==='krishna'){
    //   setError("myform",{message:'Invalid user'})
    // }
    // else if(data.username==='krishn'){
    //   setError("blockedUser", {message:"You have been temporarily Blocked "})
    // }
  }

  return (
    <div className='container border flex justify-center items-center ' >
      {isSubmitting && <div>Loading...</div> }
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder='username' className='border-2' {...register("username",{required:{value:true,message:'This field is required'},minLength:{value:3 , message: 'Min Len should be 3'},maxLength:{value:10,message:"Max len should be 10"}})} type='text' />
          {errors.username && <div className='text-red-500'>{errors.username.message}</div>}
        </div>
        <div>
          <input placeholder='password' className='border-2' {...register("password")} type='password' />
        </div>
        <div>
          <input  disabled={isSubmitting} className='border-2 rounded-2xl bg-blue-800 px-2 text-white' type='submit' value='submit' />
          {errors.myform && <div className='text-red-900'>{errors.myform.message}</div> }
          {errors.blockedUser && <div className='text-red-900'>{errors.blockedUser.message}</div> }
        </div>

      </form>
    </div>
  )
}

export default Create