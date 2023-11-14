import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    // Reset form fields when toggling
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async () => {
    // Your form submission logic here
    if (isRegister) {
      // Handle register form submission
      console.log('Registering:', email, password);
      toggleForm()
      const newData = await fetch('http://localhost:5000/quit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((res) => res.json());

      // If registration is successful, toggle back to the login form

    } else {
      // Handle login form submission
      const newData = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((res) => res.text());
      if (newData === '1') {
        router.push('/logged'); // still testing
      } else {
        window.alert('Login ou senha inválidos.');
      }
    }
  };

  return (
<main
  className={`h-screen flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}
  style={{ backgroundImage: 'url(/images/4877010.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>      <div className="w-11/12 h-full bg-transparent flex shadow-2xl rounded-2xl">
        <div className='text-black bg-white w-1/2 flex flex-col justify-center rounded-bl-2xl rounded-tl-2xl' >
          <div className='flex flex-col m-32 gap-5 '>
          <h1 className='font-light text-2xl mb-6'>Welcome back. Please, log-in into your account.</h1>
          <form className='space-y-6 items-center justify-center'>
          <h2 className='font-thin text-3xl text-left mb-4'>{isRegister ? 'Registrar' : 'Login'}</h2>

            <div className='flex flex-col space-y-2'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='E-mail'
                type='text'
                className='bg-slate-100 focus:border-b-orange-950  border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type='password'
                className='bg-slate-100 focus:border-b-orange-950  border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear'
              />
            </div>
            <div className='flex mr-12'>
            <button
              type='button'
              onClick={handleSubmit}
              className={`w-full rounded bg-slate-400 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out`}
            >
              {isRegister ? 'Registrar' : 'Entrar'}
            </button>
            <button
              type='button'
              onClick={handleSubmit}
              className={`w-full rounded ml-7 h-10 bg-slate-400 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out`}
            >
              {isRegister ? 'Registrar' : 'Entrar'}
            </button>
            </div>
            
          </form>
          <span onClick={toggleForm} className='mt-8'>{isRegister ? 'Já tem uma conta? Entrar' : 'Não tem uma conta? Registrar'}</span>
          </div>
        </div>
        <div className='rounded-br-2xl rounded-tr-2xl bg-slate-400 w-1/2 bg-gradient-radial from-green-300 to-blue-200' style={{ backgroundImage: 'url(/images/abc.jfif)' }}>
          {/* Content for the right column */}
        </div>
      </div>
    </main>
  );
}
