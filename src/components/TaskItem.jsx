// src/components/TaskItem.jsx
import { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleEdit, saveEdit }) => {
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    saveEdit(task.id, editText);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };
  
  
const itemClasses = "flex items-center justify-between bg-white bg-opacity-80 p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-90";
//                                       ^
//                                 AQUÍ ESTÁ LA TRANSPARENCIA
  const buttonClasses = "p-2 rounded-full hover:opacity-75 transition duration-200";

  return (
    <div className={itemClasses}>
      {task.isEditing ? (
        // Modo Edición
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleSave} // Guarda al salir del input
          onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Guarda con la tecla Enter
          className="flex-grow p-2 border-b-2 border-blue-500 focus:outline-none text-gray-800"
          autoFocus
        />
      ) : (
        // Modo Visualización
        <span className="text-lg text-gray-800 break-words flex-grow mr-4">
          {task.text}
        </span>
      )}

      {/* Botones de acción */}
      <div className="flex space-x-2">
        {task.isEditing ? (
          <button
            onClick={handleSave}
            className={`${buttonClasses} text-white bg-green-500`}
            aria-label="Guardar edición"
          >
            Guardar
          </button>
        ) : (
          <button
            onClick={() => toggleEdit(task.id)}
            className={`${buttonClasses} text-white bg-yellow-500`}
            aria-label="Editar tarea"
          >
            Editar
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className={`${buttonClasses} text-white bg-red-500`}
          aria-label="Tarea Completada"
        >
          Tarea Completada
        </button>
      </div>
    </div>
  );
};

export default TaskItem;