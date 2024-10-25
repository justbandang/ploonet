import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
    

    return (
        <header className={`top-0 z-50 w-full transition-all duration-300 ease-in-out ${isSticky ? 'sticky bg-black shadow-md' : 'bg-transparent'}`}>
            <nav className="bg-transparent px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <a href="#" className="flex items-center">
                        <Image
                            src="/Isolation_Mode.svg"
                            alt="Deskripsi Gambar"
                            className='sm:w-28 md:w-28 lg:w-auto'  
                            width={170} 
                            height={28} 
                        />
                    </a>
                    <div className="flex items-center md:order-2">
                        <a href="#" className="hidden md:block text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">로그인</a>
                        <button type="button" className="hidden p-2.5 text-center md:inline-flex items-center gap-2">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11H21M15 11C15 12.3132 14.8965 13.6136 14.6955 14.8268C14.4945 16.0401 14.1999 17.1425 13.8284 18.0711C13.457 18.9997 13.016 19.7362 12.5307 20.2388C12.0454 20.7413 11.5253 21 11 21C10.4747 21 9.95457 20.7413 9.46927 20.2388C8.98396 19.7362 8.54301 18.9997 8.17157 18.0711C7.80014 17.1425 7.5055 16.0401 7.30448 14.8268C7.10346 13.6136 7 12.3132 7 11C7 9.68678 7.10346 8.38642 7.30448 7.17316C7.5055 5.95991 7.80014 4.85752 8.17157 3.92893C8.54301 3.00035 8.98396 2.26375 9.46927 1.7612C9.95457 1.25866 10.4747 1 11 1C11.5253 1 12.0454 1.25866 12.5307 1.76121C13.016 2.26375 13.457 3.00035 13.8284 3.92893C14.1999 4.85752 14.4945 5.95991 14.6955 7.17317C14.8965 8.38642 15 9.68678 15 11Z" stroke="white" stroke-linecap="round"/>
                                <path d="M21 11C21 12.3132 20.7413 13.6136 20.2388 14.8268C19.7362 16.0401 18.9997 17.1425 18.0711 18.0711C17.1425 18.9997 16.0401 19.7362 14.8268 20.2388C13.6136 20.7413 12.3132 21 11 21C9.68678 21 8.38642 20.7413 7.17317 20.2388C5.95991 19.7362 4.85752 18.9997 3.92893 18.0711C3.00035 17.1425 2.26375 16.0401 1.7612 14.8268C1.25866 13.6136 1 12.3132 1 11C1 9.68678 1.25866 8.38642 1.76121 7.17316C2.26375 5.95991 3.00035 4.85752 3.92893 3.92893C4.85752 3.00035 5.95991 2.26375 7.17317 1.7612C8.38642 1.25866 9.68678 1 11 1C12.3132 1 13.6136 1.25866 14.8268 1.76121C16.0401 2.26375 17.1425 3.00035 18.0711 3.92893C18.9997 4.85752 19.7362 5.95991 20.2388 7.17317C20.7413 8.38642 21 9.68678 21 11L21 11Z" stroke="white"/>
                            </svg>
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="white"/>
                            </svg>

                            <span className="sr-only">choice language</span>
                        </button>
                        <button
                            onClick={handleMobileMenuToggle}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMobileMenuOpen ? 'hidden' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                            <svg className={`${isMobileMenuOpen ? 'w-6 h-6' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:max-h-full md:overflow-visible`} id="mobile-menu-2">
                      <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-6 xl:space-x-24 md:mt-0">
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-base text-white bg-primary-700 border-b border-gray-100 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white relative md:after:content-[url(/Ellipse_770.svg)] md:after:absolute md:after:bottom-[-1.2rem] md:after:left-1/2 md:after:-translate-x-1/2 dark:border-gray-700" aria-current="page">스튜디오</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">워크센터</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">손비서</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">메타휴먼</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">영상제작소</a>
                          </li>
                          <li>
                              <a href="#" className="block py-2 pr-4 pl-3 md:text-sm text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">공지사항</a>
                          </li>
                          <li className='md:hidden flex items-center justify-end pt-2'>
                            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">로그인</a>
                            <button type="button" className="p-2.5 text-center inline-flex items-center gap-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11H21M15 11C15 12.3132 14.8965 13.6136 14.6955 14.8268C14.4945 16.0401 14.1999 17.1425 13.8284 18.0711C13.457 18.9997 13.016 19.7362 12.5307 20.2388C12.0454 20.7413 11.5253 21 11 21C10.4747 21 9.95457 20.7413 9.46927 20.2388C8.98396 19.7362 8.54301 18.9997 8.17157 18.0711C7.80014 17.1425 7.5055 16.0401 7.30448 14.8268C7.10346 13.6136 7 12.3132 7 11C7 9.68678 7.10346 8.38642 7.30448 7.17316C7.5055 5.95991 7.80014 4.85752 8.17157 3.92893C8.54301 3.00035 8.98396 2.26375 9.46927 1.7612C9.95457 1.25866 10.4747 1 11 1C11.5253 1 12.0454 1.25866 12.5307 1.76121C13.016 2.26375 13.457 3.00035 13.8284 3.92893C14.1999 4.85752 14.4945 5.95991 14.6955 7.17317C14.8965 8.38642 15 9.68678 15 11Z" stroke="white" stroke-linecap="round"/>
                                    <path d="M21 11C21 12.3132 20.7413 13.6136 20.2388 14.8268C19.7362 16.0401 18.9997 17.1425 18.0711 18.0711C17.1425 18.9997 16.0401 19.7362 14.8268 20.2388C13.6136 20.7413 12.3132 21 11 21C9.68678 21 8.38642 20.7413 7.17317 20.2388C5.95991 19.7362 4.85752 18.9997 3.92893 18.0711C3.00035 17.1425 2.26375 16.0401 1.7612 14.8268C1.25866 13.6136 1 12.3132 1 11C1 9.68678 1.25866 8.38642 1.76121 7.17316C2.26375 5.95991 3.00035 4.85752 3.92893 3.92893C4.85752 3.00035 5.95991 2.26375 7.17317 1.7612C8.38642 1.25866 9.68678 1 11 1C12.3132 1 13.6136 1.25866 14.8268 1.76121C16.0401 2.26375 17.1425 3.00035 18.0711 3.92893C18.9997 4.85752 19.7362 5.95991 20.2388 7.17317C20.7413 8.38642 21 9.68678 21 11L21 11Z" stroke="white"/>
                                </svg>
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.75593 5.12713C4.35716 5.58759 3.64284 5.58759 3.24407 5.12713L0.236821 1.65465C-0.324055 1.00701 0.135997 -8.62339e-07 0.99275 -7.87439e-07L7.00725 -2.61634e-07C7.864 -1.86735e-07 8.32406 1.00701 7.76318 1.65465L4.75593 5.12713Z" fill="white"/>
                                </svg>

                                <span className="sr-only">choice language</span>
                            </button>
                          </li>
                      </ul>
                  </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
