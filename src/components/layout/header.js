import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/Logo_Encore_Black.png';

export default function Header() {
  return (

    <header
      className={`fixed w-full sticky bg-white shadow-sm top-0 backdrop-blur-lg w-screen  h-[4rem] flex justify-center z-[10] hover:top-0 `}
    >
      <div className="flex items-center z-[1] py-4">
        <div className="relative flex items-center h-[3rem] w-[12rem]">
          <Link href="/" passhref>
            <a><Image src={logo} alt={info.companyName} layout="fill" objectFit="contain"/></a>
          </Link>
        </div>
      </div>
    </header>

  );
}
