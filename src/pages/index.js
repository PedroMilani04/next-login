import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });

const NotificationWindow = ({ message, onClose }) => (
  <div className="notification-window  bg-red-200 p-2 md:w-2/3 rounded-md font-bold text-gray-700  pl-4 xl:pl-7 ">
          <button onClick={onClose} className='hover:text-red-600 transition duration-100 ease-linear'>x</button>

    <div className="notification-content pl- pb-4">
      <span>{message}</span>
    </div>
  </div>
);

export default function Home() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState('none');
  const [showNotification, setShowNotification] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const router = useRouter();


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
        setTimeout(() => {
          setLoad('flex')
        }, 350); 
        setTimeout(() => {
          router.push('/logged');
        }, 2000); // 1500 milliseconds (1.5 seconds) delay
      } else {
        setShowNotification(true);

      }
    }
  };

  

  return (
    <>
     <div className='absolute bg-slate-100 bg-opacity-75 w-full h-full  z-50 p-0 rounded-2xl flex flex-col justify-center items-center'
          style={{ display: load,  backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <svg class="w-12 h-12 animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      <main
        className={`h-screen flex min-h-screen flex-col items-center justify-between p-8 md:p-16 ${inter.className} `}
        style={{ backgroundImage: 'url(/images/4877010.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
       
        <div className="w-full md:w-11/12 h-full bg-transparent flex shadow-2xl rounded-2xl">

          <div   className='text-black bg-white w-full lg:w-1/2 flex flex-col justify-center rounded-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl' >
            <div className='flex flex-col m-16 md:m-16 text-xs xl:m-32 xl:text-base gap-5 '>
              <h1 className='font-light text-xl md:text-2xl mb-6' data-aos="zoom-in-right">Welcome back. Please, log-in into your account.</h1>
              <form className='space-y-6 items-center justify-center'        
>
                <h2 className='font-thin text-2xl md:text-3xl text-left mb-4'>{isRegister ? 'Register' : 'Login'}</h2>

                <div className='flex flex-col space-y-2'  data-aos="fade-left"  data-aos-duration="2000" >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='E-mail'
                    type='email'
                    className='bg-transparent border-transparent border-b-blue-100 focus:border-b-rose-300 hover:border-b-rose-300  border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear'
                  />
                </div>
                <div className='flex flex-col space-y-2' data-aos="fade-left" data-aos-duration="2000" >
                  <input
                  
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    type='password'
                    className='bg-transparent border-transparent border-b-blue-100 focus:border-b-sky-300 hover:border-b-sky-300 border rounded p-2 text-gray-700 focus:outline-none transition duration-300 ease-linear'
                  />
                </div>
                <div className='flex mr-12 w-full' data-aos="zoom-in" data-aos-duration="1800">
                  <button
                    type='button'
                    
                    onClick={handleSubmit}
                    style={{
                      background: "linear-gradient(to left, #FB8994, #D04A9F)", // Adjust colors as needed
                    }}
                    class="border hover:scale-105 duration-300 relative group cursor-pointer text-white focus:scale-95 shadow-lg  overflow-hidden h-16 w-64 rounded-md  p-2 flex justify-center items-center font-extrabold"
                  >
                    <div
                      className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500"
                      style={{
                        background: "linear-gradient(to left, #FB8994, #D04A9F)", // Adjust colors as needed
                      }}
                    ></div>
                    <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800" style={{
                      background: "linear-gradient(to left, #A5EBED, #3D94C2)", // Adjust colors as needed
                    }} ></div>
                    <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700" style={{
                      background: "linear-gradient(to left, #A5EBED, #3D94C2)", // Adjust colors as needed
                    }}></div>
                    <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600" style={{
                      background: "linear-gradient(to left, #F8D4B4, #FB9A92)", // Adjust colors as needed
                    }}></div>
                    <p class="z-10">{isRegister ? 'Register' : 'Enter'}</p>

                  </button>
                  


                </div>
                {showNotification && (
          <NotificationWindow
            message="Invalid email or password"
            onClose={() => setShowNotification(false)}
          />
        )}
              </form>
              <span
                onClick={toggleForm}
                className={`w-3/4 mt-8 cursor-pointer border-b-0  transition-colors duration-300 ${isRegister ? 'text-gray-500 hover:text-sky-500 border-b-2 border-b-transparent hover:border-b-sky-300 w-1/2 ' : 'text-gray-500 hover:text-pink-500 border-b-2 border-b-transparent hover:border-b-pink-300'}`}
              >
                {isRegister ? 'Already has an account? Log-in' : "Doesn't have an account? Register"}

              </span>

            </div>
          </div>
          <div
            className='rounded-br-2xl rounded-tr-2xl bg-slate-400 w-1/2 bg-gradient-radial from-green-300 to-blue-200 hidden lg:block'
            style={{
              backgroundImage: 'url(/images/b.jfif)',
              backgroundSize: 'cover',
              
            }}
            data-aos="flip-left"
            data-aos-duration="2000"
          >        {/* Content for the right column */}
          </div>
        </div>
       
      </main>
    </>

  );
}
