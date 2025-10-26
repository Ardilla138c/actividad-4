
import { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg flex shadow-lg rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Añadir una nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-4 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-4 font-semibold hover:bg-blue-700 transition duration-300"
      >
        Añadir Tarea
      </button>
    </form>
  );
};

export default TaskInput;