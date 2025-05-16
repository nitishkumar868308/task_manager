'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';

export default function AddTaskModal() {
  const [title, setTitle] = useState('');
  const addTask = useStore(state => state.addTask);

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, completed: false });
    setTitle('');
  };

  return (
    <div className="mb-6 flex gap-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task"
        className="border px-4 py-2 rounded w-full max-w-md"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Add Task
      </button>
    </div>
  );
}
