import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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
  resetTasks: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      tasks: [],
      filter: 'all',

      setTasks: (tasks: Task[]) => set({ tasks }),

      addTask: (task: Task) =>
        set((state) => ({ tasks: [task, ...state.tasks] })),

      deleteTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      toggleStatus: (id: number) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),

      setFilter: (filter: FilterType) => set({ filter }),

      resetTasks: () => set({ tasks: [] }),

    }),
    {
      name: 'task-storage',
    }
  )
);
