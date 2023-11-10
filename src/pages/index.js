import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const login = () => {
    console.log(email); //teste
    console.log(password); //teste
    router.push('/logged') // ainda teste
  }

  //TESTE BD
  const getData = async () => {
    const newData = await fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then((res) => res.json());
    console.log(newData);
  };
  
  

  return (
    <main className={` h-screen flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-white`}>
      <div className="w-11/12 h-full bg-white flex ">
        <div className='text-black bg-slate-200 w-1/2 flex flex-col justify-center items-center rounded-bl-2xl rounded-tl-2xl'>
          <h1 className='font-light text-7xl mb-20'>Olá!</h1>
          <h2 className='font-thin text-3xl text-left mb-4'>Login: </h2>
          <form className='flex-col space-y-4 items-center'>
            <div className='flex flex-col space-y-2'>
              <input onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' type='text' className='bg-slate-100 focus:border-b-orange-950  border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear' />
            </div>
            <div className='flex flex-col space-y-2'>
              <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type='password' className='bg-slate-100 focus:border-b-orange-950  border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear' />
            </div>
            <button
              type='button'
              onClick={getData}
              className={`w-full rounded bg-slate-400 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out`}
            >
              Entrar
            </button>
          </form>

        </div>
        <div className='rounded-br-2xl rounded-tr-2xl bg-slate-400 w-1/2 bg-gradient-radial from-green-300 to-blue-200'>
          {/* Content for the right column */}
        </div>
      </div>
    </main>
  )
}
