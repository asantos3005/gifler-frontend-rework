import { Link } from "react-router";


function Navbar(){
    return(
        <div className="navBar">
            <Link to={'/'}><h1 className="navLogo navItem">Gifler</h1></Link>
            <Link to={'/create'} className="navItem">Create</Link>
            <Link to={'/collection'} className="navItem">Collection</Link>
            <Link to={'/login'} className="rightPlaceNavItem">Log In</Link>
        </div>
    )
}

export default Navbar;