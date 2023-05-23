import Image from 'next/image'
import feiraLogo from '../assets/logoIcon.svg'
import ballOne from '../assets/ballOne.svg'
import ballTwo from '../assets/ballTwo.svg'

export default function Home() {
  return (
    <div>
      <div>
        <Image src={feiraLogo} alt="Logo"/>
    </div>
    <div >
        <Image src={ballOne} alt="Bola verde"/>
    </div>
    <div >
        <div>
            <p>Login</p>
        </div>
        <div>
            <div>
                <p>Email</p>
                <input id="username" type="email" placeholder="email@email.com"/>
            </div>
            <div>
                <div>
                    <input id="password" type="password" placeholder="***************"/>
                </div>
                <div>
                    <button id="forget"> <a href=""> Esqueceu a senha? </a></button>
                </div>
            </div>
        </div>
        <div>
            <button id="enter">
                <a href="">
                    <p>Entrar</p>
                </a>
            </button>

            <button id="register">
                <a href="">
                    <p>Cadastre-se</p>
                </a>
            </button>
        </div>
    </div>
    <div>
        <Image src={ballTwo} alt="Bola verde"/>
    </div>
    </div>
  )
}
