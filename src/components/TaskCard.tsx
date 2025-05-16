'use client';

import { Task } from '@/types';
import { useStore } from '@/store/useStore';
import Link from 'next/link';

export default function TaskCard({ task }: { task: Task }) {
  const toggleStatus = useStore(state => state.toggleStatus);
  const deleteTask = useStore(state => state.deleteTask);

  const btnClass =
    "w-28 py-2 rounded-md text-white text-sm cursor-pointer font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";

  return (
    <div className="flex justify-between items-center bg-white p-5 shadow-md rounded-lg border border-gray-200">
      <div className="max-w-xs">
        <h2
          className={`text-lg font-semibold truncate ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'
            }`}
          title={task.title}
        >
          {task.title}
        </h2>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href={`/dashboard/tasks/${task.id}`}
          className={`${btnClass} bg-blue-600 hover:bg-blue-700 focus:ring-blue-400 text-center`}
        >
          View Details
        </Link>
        <button
          onClick={() => toggleStatus(task.id)}
          className={`${btnClass} ${task.completed
            ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400'
            : 'bg-green-600 hover:bg-green-700 focus:ring-green-400'
            }`}
        >
          {task.completed ? 'Mark Pending' : 'Mark Done'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className={`${btnClass} bg-red-600 hover:bg-red-700 focus:ring-red-400`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
