import React, { useState } from "react";
import "./Header.css";
import Bar from "../../assets/bars.png";
import logo from "../../assets/logo.png";

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    const linkStyles = {
        color: "inherit",
        textDecoration: "none",
        display: "inline-block",
        margin: 0,
        padding: 0,
        border: "none",
        background: "none",
        font: "inherit",
        cursor: "pointer",
        outline: "none",

    };

    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: "var(--orange)",
                        padding: "1rem",
                        borderRadius: "7px",
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bar}
                        alt="menubar"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                </div>
            ) : (
                <ul className="header-menu">
                    <li onClick={() => setMenuOpened(false)}>
                        <li>
                            <a href="#Home" span={true} smooth="true" style={ linkStyles }>
                                Home
                            </a>
                        </li>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <li>
                            <a href="#Program" span={true} smooth="true" style={ linkStyles }>
                                Programs
                            </a>
                        </li>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <li>
                            <a href="#Plan" span={true} smooth="true" style={ linkStyles }>
                                Plans
                            </a>
                        </li>
                    </li>
                    <li>
                        <li  onClick={() => setMenuOpened(false)}>
                            <a href="#About" span={true} smooth="true" style={ linkStyles }>
                                About Us
                            </a>
                        </li>
                        
                    </li>
                    <li>
                            <li   onClick={() => setMenuOpened(false)}>
                                <a href="#Testimonial" span={true} smooth="true" style={ linkStyles }>
                                    Testimonials
                                </a>
                            </li>
                        </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
