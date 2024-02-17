import { NavLink } from "react-router-dom"

const Header = () => {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <NavLink className="site-logo" to='/'>#VANLIFE</NavLink>
            <nav>
                <NavLink 
                    to='/about'
                    style={({isActive}) => isActive ? activeStyles : null}
                    >About</NavLink>
                <NavLink 
                    to='/vans'
                    style={({isActive}) => isActive ? activeStyles : null}
                    >Vans</NavLink>
                <NavLink 
                    to='/host'
                    style={({isActive}) => isActive ? activeStyles : null}
                    >Host</NavLink>
            </nav>
        </header>
    )
}

export default Header