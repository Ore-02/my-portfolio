import './navigation.scss'
import { NavLink, Outlet} from "react-router-dom"
import { useContext, useEffect } from "react";
import { NavContext } from "../../context/nav.context";

const Navigation = () => {
    const { isNavOpen, setIsNavOpen,} = useContext(NavContext)

    useEffect(() => {
        setIsNavOpen({nav:"close-nav"})
    }, [])


    const NavIn = () => {
        if (isNavOpen.nav === "close-nav") {
            setIsNavOpen({nav: "open-nav"})
            document.body.style.overflow = "hidden"
        } else {
            setIsNavOpen({nav: "close-nav"})
            document.body.style.overflow = ""
        }
    }

    const NavOut = () => {
        if (isNavOpen.nav === "close-nav") {
            setIsNavOpen({nav: "open-nav"})
            document.body.style.overflow = "none"
        } else {
            setIsNavOpen({nav: "close-nav"})
            document.body.style.overflow = ""
        }
    }

    return (
        <>
        <header className={`header ${isNavOpen.nav}`}>
            <div class="overlay"></div>
            <nav className='navigation for-mobile'>
            <a className={`hamburger ${isNavOpen.nav}`} onClick={NavIn}>
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div className="nav-links for-mobile" onClick={NavOut}>
                <NavLink className={`nav-link ${isActive => "active"}`} to='/'>Home</NavLink>
                <NavLink className={`nav-link ${isActive => "active"}`}  to='/about'>About</NavLink>
                <NavLink className={`nav-link ${isActive => "active"}`} to='/projects'>Projects</NavLink>
                <NavLink className={`nav-link ${isActive => "active"}`} to='/contact'>Contact</NavLink>
            </div>
            </nav>
            
        </header>
        <Outlet/>
        </>
    )
}

export default Navigation;