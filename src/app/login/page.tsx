import LoginForm from '@/components/LoginForm';
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-100">
      <LoginForm />
      <Toaster />
    </div>
  );
}
