import { Link, useLocation } from "react-router-dom"
import "../css/NavBar.css"
import {useState, useEffect} from "react";

import MainLogo from "../assets/main-cutsort-logo.png"

function NavBar(){
    const location = useLocation();
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/ds100", label: "DS-100" },
        { to: "/ds200", label: "DS-200" },
        { to: "/questionnaire", label: "Questionnaire" },
        { to: "/contact", label: "Contact" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [isSmall, setIsSmall] = useState(window.innerWidth < 690);
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    }

    //if isSmall, we need isOpen to be true
    //if not isSmall, we render the navbar links and set isOpen to false
    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 690);
            if (!isSmall) {
                setIsOpen(false); // Close the navbar when resizing to larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        // Call once to set initial state in case of SSR or dynamic resizing
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);
    

    return <nav className="navbar">
        <div className="navbar-header">
            <div className="navbar-brand">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                    <img
                        src={MainLogo}
                        alt="CutSort Logo"
                        loading="lazy"
                        className="navbar-logo"
                    />
                </Link>
            </div>
            {isSmall && (<div className="hamburger" onClick={toggleNavBar}>
                <span></span>
                <span></span>
                <span></span>
            </div>)}
        </div>
        
        {((isSmall && isOpen) || !isSmall) && (
        <div className="navbar-links">
            {navLinks.map(link => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={
                        "nav-link" + (location.pathname === link.to ? " active" : "")
                    }
                    onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'instant' });
                            setIsOpen(false);
                            }}>
                    {link.label}
                </Link>
            ))}
        </div>
        )}
        
        
    </nav>
}

export default NavBar