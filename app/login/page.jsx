import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

  const res = await fetch('/api/login',{
    method:'POST',
    headers:{
      'Content-Type':"application/json"
    },
    body: JSON.stringify({
      email:email,
      password:password         
    })
  })

  if(res.ok){
    router.push('/dashboard')
  }
  
  else{
    alert(await res.json())
  }
  
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// export default Login;
