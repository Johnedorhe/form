import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      reset();
      navigate("/login"); // redirect after successful registration
    } catch (error) {
      alert(error.message);
      reset();
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Register Page</h1>
      <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" {...register("name")} className="w-full px-3 py-2 border rounded" />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" {...register("email")} className="w-full px-3 py-2 border rounded" />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              className="w-full px-3 py-2 border rounded pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        <div className='flex justify-between mt-4'>
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;