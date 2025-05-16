'use client';

import { Task } from '@/types';
import { useStore } from '@/store/useStore';

export default function TaskCard({ task }: { task: Task }) {
  const toggleStatus = useStore(state => state.toggleStatus);
  const deleteTask = useStore(state => state.deleteTask);

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow rounded">
      <div>
        <h2
          className={`text-lg font-medium ${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.title}
        </h2>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => toggleStatus(task.id)}
          className={`px-3 py-1 rounded cursor-pointer ${
            task.completed ? 'bg-yellow-400' : 'bg-green-500'
          } text-white text-sm`}
        >
          {task.completed ? 'Mark Pending' : 'Mark Done'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 rounded bg-red-500 text-white text-sm cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
