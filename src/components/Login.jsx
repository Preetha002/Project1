import React from 'react';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center min-h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl w-full max-w-md text-white space-y-6">
        <div className="text-center">
          <img src="https://img.icons8.com/ios-filled/100/FFFFFF/artificial-intelligence.png" className="mx-auto mb-4" width="60" alt="Logo" />
          <h1 className="text-2xl font-bold">Welcome to Alyyooo</h1>
          <p className="text-sm">Your AI-powered learning companion</p>
        </div>

        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg placeholder-white focus:outline-none" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg placeholder-white focus:outline-none" />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-bold">Continue Learning</button>
        </form>

        <div className="text-center text-sm">
          <div className="flex items-center justify-center my-2">
            <div className="h-px bg-white w-1/3"></div>
            <span className="px-2">or sign in with</span>
            <div className="h-px bg-white w-1/3"></div>
          </div>
          <div className="flex justify-center">
            <button className="bg-white rounded-full p-2">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" width="24" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm mt-4">
          New to Alyyooo? <a href="#" className="underline">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
