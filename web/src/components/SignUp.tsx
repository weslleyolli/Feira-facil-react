'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const validUsername = "user123";
const validPassword = "password123";


export function SignUp() {
    const [loginMessage, setLoginMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleLogin() {
      if (username === validUsername && password === validPassword) {
        alert("Login successful!")
      } else {
        alert("Credenciais inválidas. Por favor, tente novamente.")
      }
    }

    return (
        <div className="min-h-screen flex items-center justify-center mx-5">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-2xl rounded-xl px-6 py-8 bg-white z-10">
            <div>
              <h1 className="text-4xl font-Fredoka font-bold text-center">Login</h1>
            </div>
            <div className="mt-7 space-y-3">
              <div>
                <p className="pl-1 font-Fredoka text-lg">E-mail:</p>
                <input
                  className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                  id="email"
                  value={username}
                  type="email"
                  placeholder="email@example.com"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <p className="pl-1 font-Fredoka text-lg">Senha</p>
                  <input
                    className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                    id="password"
                    value={password}
                    type="password"
                    placeholder="**********"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-right mt-2">
                  <button className="text-green150 font-Fredoka" id="forget">
                    <Link href="/redefinirSenha">Esqueceu a senha?</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between px-2 h-10 gap-5 mt-10 space-x-2">
              <Link href="/categories" className="bg-green150 text-white rounded-md text-center flex justify-center w-full">
                <button onClick={handleLogin} className="w-full">
                  <p className="font-Fredoka">Entrar</p>
                </button>
              </Link>
      
              <button className="w-full">
                <Link href="/register">
                  <p className="text-green150 font-Fredoka">Cadastre-se</p>
                </Link>
              </button>
            </div>
            <div>{loginMessage}</div>
          </div>
        </div>
      );
}

