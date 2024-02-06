import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul className='list-none'>
            <span className='group'>
                <Link to={'/'}>
                    <li className='inline text-black px-8 py-3 group-hover:bg-slate-500'>
                        <a className='group-hover:text-white'>Home</a>
                    </li>
                </Link>
            </span>
            <span className='group'>
                <Link to={'/login'}>
                    <li className='inline text-black px-8 py-3 group-hover:bg-slate-500'>
                        <a className='group-hover:text-white'>Log In</a>
                    </li>
                </Link>
            </span>
            <span className='group'>
                <li className='inline text-black px-8 py-3 group-hover:bg-slate-500'>
                    <a className='group-hover:text-white'>Contact</a>
                </li>
            </span>
            <span className='group'>
                <Link to={'/about'}>
                    <li className='inline text-black px-8 py-3 group-hover:bg-slate-500'> 
                        <a className='group-hover:text-white'>About</a>
                    </li>
                </Link>
            </span>
            <Outlet />
        </ul>
    )
}