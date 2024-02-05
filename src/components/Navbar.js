import { Outlet, Link } from 'react-router-dom';

import './Navbar.css'

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to={'/'}><a >Home</a></Link>
            </li>
            <li>
                <Link to={'/login'}><a >Log In</a></Link>
            </li>
            <li>
                <a >Contact</a>
            </li>
            <li>
                <Link to={'/about'}><a >About</a></Link>
            </li>
            <Outlet />
        </ul>
    )
}