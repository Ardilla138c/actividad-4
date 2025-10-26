// src/App.jsx
import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

// Estado inicial para demostración
const initialTasks = [
  //{ id: 1, text: 'cual es tu prxima tarea?', isEditing: false },

];

function App() {
  // Manejo del estado central de las tareas
  const [tasks, setTasks] = useState(initialTasks);
  const [nextId, setNextId] = useState(4); // Para generar IDs únicos

  // 1. FUNCIÓN AGREGAR TAREA
  const addTask = (text) => {
    if (text.trim() === '') return;
    const newTask = {
      id: nextId,
      text: text,
      isEditing: false
    };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  };

  // 2. FUNCIÓN ELIMINAR TAREA
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 3. FUNCIÓN EDITAR TAREA (Toggle del modo edición)
  const toggleEdit = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  // 4. FUNCIÓN GUARDAR EDICIÓN
  const saveEdit = (id, newText) => {
    if (newText.trim() === '') {
        deleteTask(id); // Elimina si el texto editado está vacío
        return;
    }
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  return (
    // ESTE ES EL CONTENEDOR PRINCIPAL CON EL FONDO PERSONALIZADO
    <div className="min-h-screen fondo-personalizado p-4 flex flex-col items-center">
      
      {/* Título con fondo semitransparente para mejor contraste */}
      <h1 className="text-4xl font-bold text-white my-6 bg-black bg-opacity-50 p-2 rounded">
        🐿️ Lista de Tareas 🐿️ 
      </h1>
      
      {/* Componente para agregar nuevas tareas */}
      <TaskInput addTask={addTask} />

      {/* Lista de Tareas */}
      <div className="w-full max-w-lg mt-6 space-y-3">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleEdit={toggleEdit}
            saveEdit={saveEdit}
          />
        ))}
        {tasks.length === 0 && (
          <p className="text-center text-white bg-black bg-opacity-50 p-2 rounded mt-10">¡No tienes tareas, excelente dia! 🐿️ </p>
        )}
      </div>
    </div>
  );
}

export default App;