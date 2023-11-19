export default function Logged() {
    return (
        <div className="min-h-screen flex flex-col text-gray-600 font-light text-2xl justify-center items-center p-8" style={{ backgroundImage: 'url(/images/4877010.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mt-10 mb-10 flex flex-col justify-center items-center " >
                <h1 className="text-8xl h-32 mb-4 bg-gradient-to-r from-blue-600 via-rose-400 to-pink-600 text-transparent bg-clip-text" data-aos="fade-left" data-aos-duration="2000" style={{ background: 'linear-gradient(to right, #3490dc, #fuchsia)' }}>You're logged in!</h1>
                <h2 className="text-3xl mb-2 font-bold" data-aos="fade-right" data-aos-duration="2800">What does this mean?</h2>
            </div>
            <div className="w-1/2 bg-white rounded-xl p-20 mt-10 mb-10 text-center text-gray-500 " data-aos="flip-right">
                <p className="mb-4">
                    Congratulations! You've successfully logged into your account. The information you provided on the login page has been sent to the SQL Server, verified, and returned!
                </p>
                <p className="mb-4">
                    Behind the scenes, a series of processes occur. Your login information is queried against the data stored on our server. If your email and password match a user ID that was generated upon registering, you're redirected to this page!
                </p>
                <p className="mb-4">
                    This "Login screen" project was created with the primary goal of practicing Next.js integration with Tailwind CSS, connecting to SQL databases, and deploying databases online using services such as Heroku Cloud. 
                </p>
                <p className="font-bold mb-4 "> Thank you for your time!</p>
                <p className="font-light mb-1">See other projects of mine in my</p> <a href="https://pedro-portfolio-cyan.vercel.app" className="font-semibold hover:text-blue-400 transition duration-300 ease-linear ">Portfolio!</a>
            </div>
        </div>
    );
}
