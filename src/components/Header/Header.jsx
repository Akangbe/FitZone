import React from "react"
// import "./Header.css"
import "./Header.css"
import logo from "../../assets/logo.png"
const Header=()=>{
return (
    <div className="header">
        <img src={logo} alt={logo.name}className="logo" />
<ul className="header-menu"> 
    <li>Home</li>
    <li>Program</li>
    <li>Why Us</li>
    <li>About Us</li>
    <li>Testimonials</li>
</ul>
    </div>
)
}
export default Header