// import "./Header.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header>
                <div className="outline">
                    <div className='header__inline'>

                        {/* LOGO */}
                        <div className="header__logo">
                            <img src="./assets/FrameLogo.png" alt="" />
                            <span className="pc__logo">FinanceFlow</span>
                            <span className="mobile__logo">Crypto</span>
                        </div>

                        {/* NAVIGATION */}
                        <nav className="header__nav">
                            <ul className="nav__list">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/pricing">PRICING</Link></li>
                                <li><Link to="/tokens">TOKENS</Link></li>
                                <li><Link to="/blog">BLOG</Link></li>
                                <li><Link to="/contact">CONTACT US</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* BUTTONS */}
                    <button className="btn-download">DOWNLOAD APP</button>
                    <button className="btn-toggle">☰</button>
                </div>
            </header>
        </div>
    )
}
export default Header;
