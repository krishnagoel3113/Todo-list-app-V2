import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <nav className="navbar navcontainer ">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><Logo /></Link>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/alltodos"   className={({ isActive }) => isActive ? 'active' : ''}>
              All Todos
            </NavLink>
            {/* <NavLink to="/alltodos/all"   className={({ isActive }) => isActive ? 'active' : ''}>
              All Todos
            </NavLink> */}
          </li>
          <li>
            <NavLink to="/create" className={({ isActive }) => isActive ? 'active' : ''}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" className={({ isActive }) => isActive ? 'active' : ''}>
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
