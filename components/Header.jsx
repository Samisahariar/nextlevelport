import React from 'react'
import Link from 'next/link'
import { Nav } from './Nav'
import { Button } from './ui/button'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white '>
            <div className="container flex justify-between">
                <Link href="/">
                    <h3 className='text-4xl'>Sahariar <span className='text-accent'>.</span></h3>
                </Link>
                {/* desktop view navbar */}
                <div className='hidden lg:flex items-center gap-8'>
                    <Nav></Nav>
                    <Link href="/contacts">
                        <Button>Contact Us</Button>
                    </Link>
                </div>
                
                {/* mobile view navbar */}
                <div className='flex lg:hidden'>
                    <h3>mobile nav</h3>
                </div>
            </div>




        </header>
    )
}

export default Header