// pages/login.js
'use client'
import React, { useState } from 'react';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Button, Link } from 'react-daisyui';
import Image from 'next/image';
import Layout from '../components/layout';
import { useRouter } from 'next/navigation';
//import jwt_decode from 'jwt-decode';

import authService from '@/services/authService';

    const Login = () => {
    

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
 

    // Replace the following condition with your actual authentication logic
// Example decodeToken function using jwt_decode library

      const handleLogin = async () => {
        try {  //   router.push('../Modules/Estimation')
          const token = await authService.login(username, password);
       
          console.log('Token:', token);
       
          const tokenParts = token.split('.');
          const encodedPayload = tokenParts[1];
          const decodedPayload = JSON.parse(atob(encodedPayload));
          console.log('decodedPayload:', decodedPayload);
          if (decodedPayload.username === 1) {
            // Redirect to admin page
            router.push('/Admin/Users');
          } else {
            // Redirect to user page or any other logic
            router.push('/user');
          }
        // router.push('/Admin')
          // Redirect to dashboard or next page
        } catch (error) {
          console.error('Login failed:', error);
        }
      }; 
   /*   if (username !== '' && password !== '') {
    } else {
      console.log('Invalid credentials');
      router.push('../Modules/Estimation')
      // Handle incorrect credentials, show an error message, etc.
    }*/

      
        return (
          <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          
    <div className="bg-white p-8 rounded-lg shadow-md">
                       {/* Enterprise Icon */}
      <div className="mb-4">
        <Image
          src="/enterprise-icon.png"  // Update with the correct path
          alt="Enterprise Icon"
          width={80}
          height={80}
        />
      </div> 
              <h1 className="text-2xl font-bold mb-4">Connectez-vous à votre compte</h1>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                          NOM D'UTILISATEUR
                  </label>
                  <Input
                  value={username} 
                    type="name"
                    id="name"
                    placeholder="Votre adresse e-mail"
                    className="w-full"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Mot de passe
                  </label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Votre mot de passe"
                    className="w-full"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="button" onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                  Connexion
                </Button>
              </form>
            </div>
          </div>
        );
      };
      
      export default Login;