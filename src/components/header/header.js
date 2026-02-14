import {useState, useRef, useEffect} from 'react';
import logo from '../../assets/images/logo.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const pages = ['درباره ما', 'سوالات متداول', 'خرید اشتراک', 'خانه'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <div
                className="hidden md:flex bg-blue-900 rounded-2xl mx-3 mt-4 p-4 justify-between items-center shadow-md">
                <div>
                    <button
                        className="bg-white hover:bg-gray-100 transition text-black font-medium px-6 py-2.5 rounded-lg shadow">
                        ورود یا ثبت‌نام
                    </button>
                </div>

                <div className="flex items-center gap-10">
                    {pages.map((page, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-white font-medium hover:text-blue-200 transition border-b-2 border-transparent hover:border-blue-300 pb-1"
                        >
                            {page}
                        </a>
                    ))}
                </div>

                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 w-auto"
                    />
                </div>
            </div>

            <div
                className="flex md:hidden bg-blue-900 rounded-2xl mx-3 mt-4 p-4 justify-between items-center shadow-md">
                <button
                    className="bg-white hover:bg-gray-100 transition text-black font-medium px-5 py-2.5 rounded-lg shadow">
                    ورود یا ثبت‌نام
                </button>

                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/60 z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />

                    <aside
                        ref={sidebarRef}
                        className={`
              fixed top-0 right-0 z-50
              h-screen w-4/5 max-w-xs
              bg-white text-black
              shadow-2xl
              text-right
              transition-transform duration-800 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              md:hidden
            `}
                    >
                        <div className="flex items-center justify-between p-5 border-b border-gray-800">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                            <button
                                onClick={toggleMenu}
                                className="text-black text-3xl font-light hover:text-gray-300 focus:outline-none"
                            >
                                ×
                            </button>
                        </div>

                        <nav className="p-5">
                            <ul className="space-y-2">
                                {pages.map((page, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="block px-4 py-3 rounded-lg hover:bg-blue-800/30 transition-colors text-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {page}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </>
            )}
        </>
    );
}

export default Header;