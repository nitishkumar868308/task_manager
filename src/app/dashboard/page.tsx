'use client';

import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import TaskList from '@/components/TaskList';
import AddTaskModal from '@/components/AddTaskModal';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
    const { tasks, setTasks } = useStore();
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (useStore.persist.hasHydrated()) {
                setHasHydrated(true);
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!hasHydrated) return;

        if (tasks.length === 0) {
            fetch('/tasks.json')
                .then((res) => res.json())
                .then((data) => setTasks(data));
        }
    }, [hasHydrated, tasks.length, setTasks]);

    return (
        <ProtectedRoute>
            <div className="min-h-screen px-6 py-8">
                <AddTaskModal />
                <TaskList tasks={tasks} />
            </div>
        </ProtectedRoute>
    );
}
