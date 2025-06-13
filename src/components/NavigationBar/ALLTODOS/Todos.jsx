import './Todos.css';
import { NavLink, Outlet } from 'react-router-dom';

const Todos = () => {
  return (
    <div className='todosContainer'>
      <nav className='todosNav navcontainer'>
        <ul className='navLinks'>
          <li>
            <NavLink
              to="all"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              All Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="completed"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Completed Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="incompleted"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Incompleted Todos
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="todosContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Todos;
