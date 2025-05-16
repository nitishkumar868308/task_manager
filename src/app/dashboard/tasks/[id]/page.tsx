'use client';

import { useParams } from 'next/navigation';
import { useStore } from '@/store/useStore';

export default function TaskDetailPage() {
  const { id } = useParams();
  const { tasks } = useStore();

  const task = tasks.find((t) => t.id.toString() === id);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white shadow-md rounded-xl max-w-md w-full p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-wide">
          {task?.title || 'Loading...'}
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          Task ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{task?.id ?? '--'}</span>
        </p>

        {task ? (
          <p
            className={`inline-block px-4 py-2 rounded-full text-base font-semibold ${
              task.completed ? 'bg-green-200 text-green-900' : 'bg-yellow-200 text-yellow-900'
            }`}
          >
            {task.completed ? 'Completed' : 'Pending'}
          </p>
        ) : (
          <p className="text-gray-400 italic">Loading status...</p>
        )}
      </div>
    </div>
  );
}
