import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav>
                <NavLink to="/" className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}>Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </>
    )
}


export default Navbar;