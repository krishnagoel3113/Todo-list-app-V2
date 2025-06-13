import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: "Create Todo",
    description: "Easily add new tasks with a title, description, and deadline.",
    icon: "📝",
  },
  {
    title: "Edit & Delete",
    description: "Update or remove tasks anytime from your list.",
    icon: "✏️",
  },
  {
    title: "Track Progress",
    description: "Mark todos as completed or incomplete in one click.",
    icon: "✅",
  },
 {
  title: "Filter Todos",
  description: "View all, completed, or incomplete tasks in organized tabs.",
  icon: "🔍",
},
  {
  title: "Save Todos to Local Storage",
  description: "Automatically save and retrieve your tasks, even after refreshing the page.",
  icon: "📂",
}

];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='homeContainer'>
      <h1 className="text-4xl font-bold text-center mb-2 text-green-400">Welcome to TodoZen</h1>
      <p className="text-center mb-6 text-lg text-gray-300">
        Organize your life, one task at a time.
      </p>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate('/create')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
        >
          ➕ Create a Todo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[80%] lg:w-[70%]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] text-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-700"
          >
            <div className="flex  text-4xl mb-3">
              {feature.icon}
              <h2 className="text-2xl font-semibold mb-2 text-green-400">{feature.title}</h2>
           
            </div>
            {/* <h2 className="text-2xl font-semibold mb-2 text-green-400">{feature.title}</h2> */}
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
