import { useContext } from "react"
import { TodoContext } from "../../../TodoContext/TodoContext"
import { useNavigate } from "react-router-dom"
const CompletedTodos = () => {
   const navigate = useNavigate();
  const { todos, setTodos } = useContext(TodoContext);
  const handleDelete = (id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }
  const handleCheckBox = (id)=>{
    const updatedTodos = todos.map(item=>item.id===id?{...item,completed:!item.completed}:item)
    setTodos(updatedTodos)
  }
  const handleEdit = (id)=>{
    const  selectedTodo = todos.find(todo=> todo.id ===id)
    navigate('/create',{state:{todo :selectedTodo}})

  }
  const completedTodos = todos.filter(todo=> todo.completed);

  

  return (
      <>
     <div className='line w-[85%] h-[0.2px] my-5 bg-gray-200 mx-auto'></div>
      <h2 className='font-bold pb-2 flex justify-center'>Your Completed Todos</h2>    
      {
        
      completedTodos.length === 0 ? (
          <p className="flex justify-center">No todos available</p>
        ) : (
        completedTodos.map((todo) => (
            <div className="todo-container" key={todo.id}>
              <input checked={todo.completed} onChange={()=>handleCheckBox(todo.id)} type="checkbox" />

              <p className={`todo-heading ${todo.completed?'line-through':''}`}>{todo.heading}</p>
              <p className={`todo-desc ${todo.completed?'line-through':''}`}>{todo.description}</p>
              <p className={`todo-date ${todo.completed?'line-through':''}`}>{todo.date}</p>
              <div className="todo-actions">
                <button onClick={()=>handleEdit(todo.id)} className="edit-btn">Edit</button>
                <button onClick={()=>handleDelete(todo.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          )))
      }
    </>
  )
}

export default CompletedTodos