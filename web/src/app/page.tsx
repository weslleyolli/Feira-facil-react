import Image from 'next/image'
import feiraLogo from '../assets/login/logoIcon.svg'
import ballOne from '../assets/login/ballOne.svg'
import ballTwo from '../assets/login/ballTwo.svg'
import { SignUp } from '@/components/SignUp'


export default function Home() {
  return (
    <div>
      <div className='absolute top-0 left-0 mx-[10px] my-8'>
        <Image className='h-[130px]' src={feiraLogo} alt="Logo"/>
      </div>
      <div className='absolute top-0 right-0'>
        <Image className='max-w-xl' src={ballOne} alt="Bola verde"/>
      </div>
      <SignUp />
      <div>
        <Image className='max-w-3xl absolute bottom-0 left-0 -z-10' src={ballTwo} alt="Bola verde"/>
      </div>
    </div>
  )
}
