import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useSedeSelector } from '../../context/SedeSelectorContext';

export default function Header() {
  const { setOpenSedeSelector } = useSedeSelector();

  return (

    <header
      className={`fixed w-full bg-white border-b border-solid border-[#eee] top-0 backdrop-blur-lg h-[8rem] flex justify-center z-[20] hover:top-0`}
    >
      <div className="container flex justify-between items-center z-[1] py-4">
        <div className="relative flex items-center h-[4rem] w-[12rem]">
          <Link href="/" passhref>
            <a><Image src={logo} alt={info.companyName} layout="fill" objectFit="contain"/></a>
          </Link>
        </div>
        <div className="md:hidden">
          <div
            onClick={() => setOpenSedeSelector(true)}
            className="flex bg-red-400 rounded-full border border-red-500 shadow-xl h-[4.2rem] px-8 items-center"
          >
            <p className="-ft-1 text-white font-medium">¿Vas a otra ciudad?</p>
          </div>
        </div>
      </div>
    </header>

  );
}
