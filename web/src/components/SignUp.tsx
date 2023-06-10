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
        <div className="h-screen flex items-center justify-center" >
            <div className="h-3/5 w-1/3 shadow-2xl rounded-xl px-16 bg-white z-10 flex flex-col items-center justify-between pt-8">
                <div>
                    <h1 className="text-4xl font-Fredoka font-bold">Login</h1>
                </div>
                <div className="w-full mt-7 flex flex-col gap-3">
                    <div>
                        <p className="pl-1 font-Fredoka  text-lg">E-mail:</p>
                        <input
                            className="w-full h-8 rounded-md border border-gray-300 text-black pl-1"
                            id="email"
                            value={username}
                            type="email"
                            placeholder="email@email.com"
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
                            <button className="text-green150 font-Fredoka" id="forget"> <a href="/redefinirSenha"> Esqueceu a senha? </a></button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between px-2 mt-10 h-10 gap-5">
                    <Link href="/categories" className="bg-green150 text-white w-2/3 rounded-md text-center flex justify-center">
                        <button onClick={handleLogin}>
                            <p className='font-Fredoka'>Entrar</p>
                        </button>
                    </Link>

                    <button className="w-2/3" id="register">
                        <a href="">
                            <p className="text-green150 font-Fredoka">Cadastre-se</p>
                        </a>
                    </button>
                </div>
                <div>{loginMessage}</div>
            </div>
        </div>
    )
}

