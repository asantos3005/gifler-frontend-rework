import { Link } from "react-router";


function Navbar(){
    return(
        <div className="navBar">
            <Link to={'/'}><h1 className="navLogo navItem">Gifler</h1></Link>
            <Link to={'/Create'} className="navItem">Create</Link>
            <Link to={'/Collection'} className="navItem">Collection</Link>
        </div>
    )
}

export default Navbar;