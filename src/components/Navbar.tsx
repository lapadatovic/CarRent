import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link 
             className='flex justify-center items-center'
             href='/'>
                <Image 
                 className='object-contain '
                 src='/logo.svg' 
                 alt='logo_image'
                 width={118}
                 height={18}
                 />
            </Link>
            <CustomButton
             title='Sign In'
             btnType='button'
             containerStyle='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default Navbar