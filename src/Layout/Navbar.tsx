import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle("overflow-hidden", !isMenuOpen);
    };

    const navLinkStyle =
        "transition font-medium capitalize px-2 py-1 ";
    const activeStyle =
        " border-b-2 border-pink-600";

    return (
        <nav className="flex items-center justify-between w-full p-2 sticky top-0 z-50 bg-white border-b dark:bg-black shadow">
            {/* Logo */}
            <NavLink to="/">
                <p className="text-3xl p-2">📚 <span className="text-pink-600 font-semibold ">library</span></p>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-base bg-white z dark:bg-black shadow]">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/all-books"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    All Books
                </NavLink>
                <NavLink
                    to="/add-books"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Add Books
                </NavLink>
                <NavLink
                    to="/borrow-summary"
                    className={({ isActive }) =>
                        isActive ? `${navLinkStyle} ${activeStyle}` : navLinkStyle
                    }
                >
                    Borrow Summary
                </NavLink>
            </ul>

            {/* Theme Toggle & Menu Icon */}
            <div className="flex items-center gap-4">
                <ModeToggle />
                <CiMenuFries
                    className="text-2xl cursor-pointer md:hidden "
                    onClick={toggleMenu}
                />
            </div>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-[250px] sm:w-[300px] bg-white dark:bg-black  shadow-lg transform transition-transform duration-300 ease-in-out z-50 p-6 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul className="flex flex-col gap-6 font-bold text-lg">
                    <NavLink
                        to="/"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            isActive ? `${activeStyle}` : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/all-books"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            isActive ? `${activeStyle}` : ""
                        }
                    >
                        All Books
                    </NavLink>
                    <NavLink
                        to="/add-books"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            isActive ? `${activeStyle}` : ""
                        }
                    >
                        Add Books
                    </NavLink>
                    <NavLink
                        to="/borrow-summary"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            isActive ? `${activeStyle}` : ""
                        }
                    >
                        Borrow Summary
                    </NavLink>
                </ul>
            </aside>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
                />
            )}
        </nav>
    );
}

export default Navbar;
