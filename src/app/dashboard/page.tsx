'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import TaskList from '@/components/TaskList';
import AddTaskModal from '@/components/AddTaskModal';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
    const { tasks, setTasks } = useStore();

    useEffect(() => {
        fetch('/tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [setTasks]);

    return (
        <ProtectedRoute>
            <div className="min-h-screen px-6 py-8">
                <AddTaskModal />
                <TaskList tasks={tasks} />
            </div>
        </ProtectedRoute>
    );
}
