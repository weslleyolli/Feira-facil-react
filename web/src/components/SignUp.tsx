export function SignUp() {
    return (
        <div className="h-screen flex items-center justify-center" >
            <div className="h-3/5 w-1/3 shadow-2xl rounded-xl px-16 bg-white z-10 flex flex-col items-center pt-10">
                <div className="text-3xl font-bold">
                    <p>Login</p>
                </div>
                <div className="w-full mt-7 flex flex-col gap-3">
                    <div>
                        <p className="pl-1 text-lg">E-mail:</p>
                        <input className="w-full rounded-md border border-gray-300 text-gray-300 underline pl-1" id="username" type="email" placeholder="email@email.com"/>
                    </div>
                    <div>
                        <div>
                            <p className="pl-1 text-lg">Senha</p>
                            <input className="w-full rounded-md border border-gray-300 text-gray-300 pl-1" id="password" type="password" placeholder="***************"/>
                        </div>
                        <div className="text-right mt-2">
                            <button className="text-green150" id="forget"> <a href=""> Esqueceu a senha? </a></button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between px-2 mt-7 h-10 gap-5">
                    <button className="bg-green150 text-white w-2/3 rounded-md" id="enter">
                        <a href="">
                            <p>Entrar</p>
                        </a>
                    </button>

                    <button className="w-2/3" id="register">
                        <a href="">
                            <p className="text-green150">Cadastre-se</p>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}