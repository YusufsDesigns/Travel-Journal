import Logo from '../assets/logo.png'
import '../style.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="" className="logo" />
            <span className="logo-text">my travel journal.</span>
        </nav>
    )
}