import { create } from 'zustand';
import { Task } from '@/types';

type FilterType = 'all' | 'completed' | 'pending';

type Store = {
  tasks: Task[];
  filter: FilterType;
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  toggleStatus: (id: number) => void;
  setFilter: (filter: FilterType) => void;
};

export const useStore = create<Store>((set) => ({
  tasks: [],
  filter: 'all',
  setTasks: (tasks: Task[]) => set({ tasks }),
  addTask: (task: Task) =>
    set((state: Store) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (id: number) =>
    set((state: Store) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
  toggleStatus: (id: number) =>
    set((state: Store) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  setFilter: (filter: FilterType) => set({ filter }),
}));
