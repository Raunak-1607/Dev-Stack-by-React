// import React from 'react';
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <>
            <div className="container mx-auto mt-16 py-10 flex justify-between">
                <div className="text-center md:text-left">
                    <img  src={Logo} alt="logo" className='mx-auto md:mx-0'/>
                    <p className='text-slate-500 mt-4'>Curated tools, technologies, and resources for developers building<br/>
                       modern software.
                    </p>

                    <ul className='flex justify-center md:justify-start gap-4 text-slate-600 mt-4'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <h3 className="font-bold">PRODUCT</h3>
                    <ul className='text-slate-500 mt-3'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>

                </div>

                <div className="hidden md:block">
                    <h3 className="font-bold">COMPANY</h3>
                    <ul className='text-slate-500 mt-3'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <h3 className="font-bold">LEGAL</h3>
                    <ul className='text-slate-500 mt-3'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <section className='container mx-auto mt-6 flex justify-between items-center mb-3'>
                <div>
                    <p className="text-slate-400  font-normal">
                          © 2026 Dev Stack. All rights reserved.
                   </p>
                </div>
                <div>
                    <ul className="text-slate-400  font-normal flex gap-4">
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Footer;