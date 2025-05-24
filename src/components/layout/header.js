import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/Logo_Encore_Black.png';

export default function Header() {
  return (

    <header
      className={`w-full bg-white border-b border-solid border-[#eee] top-0 backdrop-blur-lg h-[8rem] flex justify-center z-[20] hover:top-0 md:fixed`}
    >
      <div className="flex items-center z-[1] py-4">
        <div className="relative flex items-center h-[4rem] w-[12rem]">
          <Link href="/" passhref>
            <a><Image src={logo} alt={info.companyName} layout="fill" objectFit="contain"/></a>
          </Link>
        </div>
      </div>
    </header>

  );
}
