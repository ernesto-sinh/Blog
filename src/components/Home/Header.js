import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import header_img from 'assets/img/header_img.png'

function Header(){
    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full sm:pt-36 sm:pb-40 xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
                  Agencia de <span> </span>
                  <Typewriter
                  words={['Marketing', 'developer', 'Diseño']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                  />  
                </h1>
                <ul className='flex flex-wrap gap-8 py-12'>
                  <li className='inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out'>
                    <Link to='/servicios/algoaqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                      Web
                    </Link>
                  </li>
                  <li className='inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out'>
                    <Link to='/servicios/otracosaaqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                      Apps
                    </Link>
                  </li>
                  <li className='inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out'>
                    <Link to='/servicios/otracosaaqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                      Video Juegos
                    </Link>
                  </li>
                  <li className='inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out'>
                    <Link to='/servicios/otracosaaqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                      Marketing
                    </Link>
                  </li>
                  <li className='inline-flex border-b-2 border-transparent hover:border-orange-button transition duration-300 ease-in-out'>
                    <Link to='/servicios/otracosaaqui' className='mt-6 text-2xl font-medium leading-8 text-gray-700 sm:text-center'>
                      Consultorias
                    </Link>
                  </li>
                </ul>  
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-sm lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
                <img alt='' src={header_img} className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header;