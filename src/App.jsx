import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar/Navbar/Navbar';
import Home from "./components/NavigationBar/Home/Home";
import Todos from './components/NavigationBar/ALLTODOS/Todos';
import AllTodos from './components/NavigationBar/ALLTODOS/All/AllTodos';
import CompletedTodos from './components/NavigationBar/ALLTODOS/Completed/CompletedTodos';
import IncompletedTodos from './components/NavigationBar/ALLTODOS/Incompleted/IncompletedTodos';
import Create from './components/NavigationBar/CreateTodos/Create';
import Feedback from './components/NavigationBar/Feedback/Feedback';
import Footer from './components/FooterBar/Footer';
import './App.css';
import { TodoContext } from './components/TodoContext/TodoContext';
import { useState,useEffect } from 'react';

function App() {
//  loads whenever refreshed
   const getInitialTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  // Save to localStorage whenever `todos` changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Router>
        <div className='box'>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />

              {/* Nested Route Setup for /alltodos */}
              <Route path='/alltodos' element={<Todos />}>
                <Route index element={<AllTodos />} />
                <Route path='all' element={<AllTodos />} />
                <Route path='completed' element={<CompletedTodos />} />
                <Route path='incompleted' element={<IncompletedTodos />} />
              </Route>

              <Route path='/create' element={<Create />} />
              <Route path='/feedback' element={<Feedback />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
