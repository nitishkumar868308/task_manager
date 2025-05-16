'use client';

import { useStore } from '@/store/useStore';
import TaskCard from './TaskCard';

type FilterType = 'all' | 'completed' | 'pending';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
};

export default function TaskList({ tasks }: Props) {
  const filter = useStore(state => state.filter);
  const setFilter = useStore(state => state.setFilter);

  const filteredTasks = tasks.filter(task =>
    filter === 'all'
      ? true
      : filter === 'completed'
      ? task.completed
      : !task.completed
  );

  const filters: FilterType[] = ['all', 'completed', 'pending'];

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded cursor-pointer ${
              filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-gray-500 text-sm">No tasks to display.</p>
        )}
      </div>
    </div>
  );
}
