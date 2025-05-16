'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';

export default function AddTaskModal() {
  const [title, setTitle] = useState('');
  const { tasks, addTask } = useStore();

  const handleAdd = () => {
    if (!title.trim()) return;

    const nextId = tasks.length > 0
      ? Math.max(...tasks.map((task) => task.id)) + 1
      : 1;

    addTask({ id: nextId, title, completed: false });
    setTitle('');
  };


  return (
   <div className="mb-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
  <input
    type="text"
    value={title}
    onChange={e => setTitle(e.target.value)}
    placeholder="Add a new task..."
    className="flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
  />
  <button
    onClick={handleAdd}
    className="w-full cursor-pointer sm:w-auto rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
  >
    Add Task
  </button>
</div>


  );
}
