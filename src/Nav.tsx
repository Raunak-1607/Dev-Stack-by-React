
import Logo from './assets/logo-text.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center mt-4 container mx-auto sticky top-0 z-50 bg-white py-3'>
            <img src={Logo} alt="Logo" />

            <ul className='flex gap-4'>
                <li><span className='text-pink-600'>Home</span></li>
                <li>Technologies</li>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='flex gap-2'>
            <button>Sign in</button>
            <button className="btn btn-secondary rounded-3xl">Sign up</button>
            </div>
        </div>
    );
};

export default Nav;