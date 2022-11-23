import React from 'react'
import { Bars4Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header() {
    return (

        <header>


            {/* top header */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                    {/* logo */}
                    <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                        <img 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectfit="contain"
                        className='cursor-pointer'
                        
                        />
                    </div>
                    {/* search bar */}
                    <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
                        <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md' type="text" />
                        <MagnifyingGlassIcon className='p-4 h-12'/>
                    </div>

            </div>

            {/* bottom header */}

            <div>


            </div>





        </header>
    )
}

export default Header
