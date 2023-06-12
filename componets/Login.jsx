import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
// import MyContext from '@context/MyContext';
const Login = () => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // const { email, setEmail } = useContext(MyContext);
  const [email,setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to backend API
    console.log({ email, password });
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // Handle response from backend
    if (response.ok) {
      // Handle successful login
      // toast.success('Login successful!');
      toast.success('Login successful!');
      router.push('/dashboard/start-campaign');

      // Redirect or show success message
    } else {
      toast.error(await response.text());
      // Handle login error
      // Display error message to the user
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
