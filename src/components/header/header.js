import {useState, useRef, useEffect} from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pages = ["درباره ما", "سوالات متداول", "خرید اشتراک", "خانه"];
    const sidebarRef = useRef(null);

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
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div className="hidden md:flex bg-blue-900 h-2/5 rounded-2xl mx-3 mt-4 p-3 justify-between items-center">
                <div className="text-center">
                    <button className="bg-white h-10 rounded-lg p-4 text-black flex items-center">
                        ورود یا ثبت نام
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="pages flex justify-center items-center transition-all">
                        {pages.map((page, index) => (
                            <ul key={index} className="pe-8">
                                <li className="page-item text-white hover:border-b-2">{page}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <img src="../../assets/images/logo.svg" alt="Logo"/>
                </div>
            </div>

            <div className="flex md:hidden bg-blue-900 h-2/5 rounded-2xl mx-3 mt-4 p-4 justify-between items-center">
                <button className="bg-white h-10 rounded-lg p-4 text-black flex items-center">
                    ورود یا ثبت نام
                </button>
                <button onClick={toggleMenu} className="text-white">
                    <img alt="svgImg"
                         src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik0gMyA3IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAzIDkgTCAyNyA5IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyA3IEwgMyA3IHogTSAzIDE0IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAzIDE2IEwgMjcgMTYgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI3IDE0IEwgMyAxNCB6IE0gMyAyMSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyAyMyBMIDI3IDIzIEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyAyMSBMIDMgMjEgeiIvPjwvc3ZnPg=="/>
                </button>
            </div>

            {isOpen && (
                <aside
                    ref={sidebarRef}
                    className="fixed top-0 right-0 w-80 h-5/6 bg-black p-4 m-3 rounded-2xl transition-transform transform translate-x-0">
                    <img src="../../assets/images/logo.svg" alt="Logo" className="mb-4"/>
                    <ul className="font-medium text-end">
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="flex items-center px-2 py-1.5 text-white rounded-base hover:bg-blue-500">
                                    {page}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </>
    );
}

export default Header;