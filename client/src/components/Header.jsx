import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
      const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 flex justify-between items-center px-4 py-2'>
        <Link to="/" className='flex items-center text-lg 
        font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white text-base sm:text-lg'>Blog</span>
            Sphere
        </Link>
        <form className="hidden lg:block">
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                //className='hidden lg:inline'
            />
        </form>

        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        

          <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as="div" 
            className="text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-colors">
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as="div" 
            className="text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-colors">
              <Link to='/about'>
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/"} as="div" 
            className="text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition-colors">
              <Link to='/projects'>
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>


        <div className="flex items-center gap-2">
          <Button className='w-12 h-10 sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
          </Link>
          <Navbar.Toggle />
          </div>
    </Navbar>
  );
}
