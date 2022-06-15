import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InstaLogo from '../../media/instagram.svg'
import LinkedinLogo from '../../media/linkedin.svg'
import FacebookLogo from '../../media/facebook.svg'
import NapsLogo from '../../media/napslogo.png'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export default function Header() {
  const [navBarActive, setNavBar] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [cookies,setCookie] = useCookies();
  useEffect(()=>{
    if(cookies.user && !loggedIn){
      setLoggedIn(true)
    }
  }, [cookies, loggedIn])
  return (
    <div className='lg:px-20 sm:px-12 px-10 m-2 rounded-lg shadow-md border-gray-100 border p-2 mb-4 pb-4'>
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
        <div className="space-y-1 sm:hidden w-6 flex flex-col mx-auto overflow-hidden cursor-pointer" onClick={()=>{setNavBar(!navBarActive)}}>
          <span className={`block w-6 h-0.5 bg-gray-600`}></span>
          <span className={`block h-0.5 bg-gray-600 transition-all duration-200 ${navBarActive?"w-3":"w-6"}`}></span>
          <span className={`block h-0.5 bg-gray-600 transition-all duration-200 ${navBarActive?"w-3":"w-6"}`}></span>
        </div>
      <div className='flex flex-row sm:justify-between '>
        <div className={`sm:flex sm:text-center sm:text-sm md:text-base sm:flex-row justify-center w-full mx-auto sm:mx-0 sm:w-auto ${navBarActive?"flex":"hidden"} flex-col overflow-hidden`}>
          <Link passHref href='/'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Home
          </div>
          </Link>
          <Link passHref href='/about'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            About
          </div>
          </Link>
          <Link passHref href='/Epistle'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Epistle
          </div>
          </Link>
          <Link passHref href='/Team'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Team
          </div>
          </Link>
          <Link passHref href='/Authors'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Authors
          </div>
          </Link>
          <Link passHref href='/Search'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Search
          </div>
          </Link>
          {loggedIn && (
          <Link passHref href='/Admin'>
          <div className='hover:bg-slate-200 transition-all duration-200 rounded-md md:mx-2 px-2 py-1 font-medium cursor-pointer'>
            Admin
          </div>
          </Link>
          )}
        </div>
        <div className='sm:block hidden cursor-pointer'>
          {/* TODO: add links */}
          <a href='https://instagram.com'>
            <Image
              src={InstaLogo}
              alt='Instagram'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </a>
          <a href='https://linkedin.com'>
            <Image
              src={LinkedinLogo}
              alt='LinkedIn'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </a>
          <a href='https://facebook.com'>
            <Image
              src={FacebookLogo}
              alt='Facebook'
              className={styles.connectItem}
              layout='intrinsic'
            />
          </a>
        </div>
      </div>
    </div>
  )
}
