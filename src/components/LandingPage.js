import React, { useState } from 'react';
import BracketGraphic from './BracketGraphic';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up with:', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-blue text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">bracketbound</h1>
          <nav>
            <button className="bg-brand-orange px-4 py-2 rounded">Sign In</button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto grid md:grid-cols-2 gap-8 items-center py-16">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-brand-blue">
            Create Your Ultimate Tournament Bracket
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Join the excitement of tournament predictions and compete with friends!
          </p>
          
          <form onSubmit={handleSignUp} className="max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <input 
              type="password" 
              placeholder="Create a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded mb-4"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-brand-orange text-white py-3 rounded hover:bg-opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div>
          <BracketGraphic />
        </div>
      </main>

      <footer className="bg-brand-blue text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 bracketbound. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
