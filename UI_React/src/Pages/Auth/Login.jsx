import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        
        if (email === 'admin@gmail.com' && password === 'admin') {
            navigate('/admindash'); 
        } else {
      
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-30 px-90 sm:px-6 lg:px-8 ">
            <div className="bg-white rounded-lg shadow-lg w-100 h-auto grid grid-cols-2 ">
               
                <div className="bg-indigo-600 flex items-center justify-center">
                    <img
                        src="https://media.istockphoto.com/id/1172802520/photo/houseboat-on-kerala-backwaters-in-alleppey-india.jpg?s=612x612&w=0&k=20&c=vHPOY4-CCqw4YzygoXmT4M_UVbhG2VTwLeN9tjTXSuw="
                        alt="Login"
                        className="object-cover h-full"
                        height="50"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="max-w-md w-full space-y-8 p-8">
                        <h2 className="text-center text-3xl text-gray-900">Sign in to your account</h2>
                        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                      
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                         
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                       
                            <div className="flex items-center justify-between">
                                <label htmlFor="remember-me" className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                    
                                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot password?</a>
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-black">Don't have an account? <Link to="/Register" className="text-sm text-indigo-600 hover:text-indigo-800">Sign Up</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login; 