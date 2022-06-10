import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InstaLogo from '../../media/instagram.svg'
import LinkedinLogo from '../../media/linkedin.svg'
import FacebookLogo from '../../media/facebook.svg'
import NapsLogo from '../../media/napslogo.png'

export default function Header() {
  return (
    <div className='lg:px-20 sm:px-12 px-10 m-2 rounded-lg shadow-md border-gray-100 border p-2 mb-6'>
      <div className='flex flex-col sm:flex-row justify-between mb-4'>
        <div
          className={`relative lg:w-32 md:w-24 sm:w-24 w-full ${styles.logoContainer}`}
        >
          <Image src={NapsLogo} alt='Naps Logo' layout='fill' />
        </div>
        <div className='flex flex-col justify-center sm:text-right text-center'>
          <div className='text-3xl font-black'>
            News and Publication Society
          </div>
          <div className='text-lg font-semibold'>
            Birla Institute of Technology
          </div>
        </div>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='flex text-sm sm:text-base flex-row justify-center w-max mx-auto sm:mx-0 sm:w-auto'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/'>Home</Link>
          </div>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/about'>About</Link>
          </div>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/Epistle'>Epistle</Link>
          </div>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/Team'>Team</Link>
          </div>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/Authors'>Authors</Link>
          </div>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer'>
            <Link href='/Search'>Search</Link>
          </div>
        </div>
        <div className='sm:block hidden cursor-pointer'>
          {/* TODO: add links */}
          <Link href='https://instagram.com' passHref>
            <Image
              src={InstaLogo}
              alt='Instagram'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </Link>
          <Link href='https://linkedin.com' passHref>
            <Image
              src={LinkedinLogo}
              alt='LinkedIn'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </Link>
          <Link href='https://facebook.com' passHref>
            <Image
              src={FacebookLogo}
              alt='Facebook'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
