import React, { useEffect, useState } from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 mb-6">
          Something went wrong or this page doesn’t exist.
        </p>
        <a
          href="#/login"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const router = createHashRouter([
    { path: "/register", element: <Register />, errorElement: <ErrorPage /> },
    { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
    { path: "/dashboard", element: user ? <Dashboard /> : <Navigate to="/login" />, errorElement: <ErrorPage /> },
    { path: "*", element: <ErrorPage /> } // catch-all route
  ]);

  return <RouterProvider router={router} />;
}

export default App;