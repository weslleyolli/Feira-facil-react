import Image from 'next/image'
import feiraLogo from '../assets/login/logoIcon.svg'
import ballOne from '../assets/login/ballOne.svg'
import ballTwo from '../assets/login/ballTwo.svg'
import { SignUp } from '@/components/SignUp'


export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 mx-4 my-8 z-10">
        <Image className="h-20 sm:h-32 md:h-40" src={feiraLogo} alt="Logo" />
      </div>
      <div className="absolute top-0 right-0">
        <Image className="max-w-xs sm:max-w-md md:max-w-lg" src={ballOne} alt="Bola verde" />
      </div>
      <SignUp />
      <div>
        <Image className="max-w-full sm:max-w-2xl md:max-w-3xl absolute bottom-0 left-0 -z-10" src={ballTwo} alt="Bola verde" />
      </div>
    </div>
  );
}