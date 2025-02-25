import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X} from 'lucide-react';
import {motion} from 'framer-motion';

const menuItems = [
    {name: 'Home', href: '/'},
    {name: 'Solutions', href: '/solutions'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
    {name: 'Careers', href: '/careers'},
    {name: ' Trials', href: '/trials'},
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const location = useLocation();

    return (
        <nav className="bg-black backdrop-blur-lg border-gray-800 fixed w-full z-50"
             aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 relative">
                    {/* Mobile Menu Button - Left */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6"/>
                            ) : (
                                <Menu className="block h-6 w-6"/>
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center" aria-label="Home">
                            <img src="/coreshield.png" alt='logo' className='h-12 w-30'/>
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden md:flex items-center space-x-2 ">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:text-white px-14 py-7 uppercase font-light rounded-md text-sm transition-all duration-300 ease-in-out relative"
                                onMouseEnter={() => setHoveredItem(item.href)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {(hoveredItem === item.href || (location.pathname === item.href && !hoveredItem)) && (
                                    <motion.div
                                        layoutId="navbar-highlight"
                                        className="absolute inset-0 bg-neutral-900 "
                                        initial={false}
                                        animate={{opacity: 1}}
                                        transition={{type: "spring", stiffness: 400, damping: 30}}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Empty div for spacing on mobile */}
                    <div className="md:hidden w-10"></div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black  border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-gray-300 hover:text-white block px-3 py-2 uppercase rounded-md text-base font-medium transition-all duration-300 ease-in-out relative"
                                onClick={() => setIsOpen(false)}
                                onMouseEnter={() => setHoveredItem(item.href)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {(hoveredItem === item.href || (location.pathname === item.href && !hoveredItem)) && (
                                    <motion.div
                                        layoutId="navbar-highlight-mobile"
                                        className="absolute inset-0 bg-neutral-900 "
                                        initial={false}
                                        animate={{opacity: 1}}
                                        transition={{type: "spring", stiffness: 400, damping: 30}}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;