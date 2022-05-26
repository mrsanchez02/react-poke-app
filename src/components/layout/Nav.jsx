import React from 'react'
import github from './github.svg';
import './nav.css';

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className="social-Media__container">
            <div className="circle">
                <a href="https://github.com/mrsanchez02/react-poke-app" target={'_blank'} rel='noreferrer'>
                    <img src={github} alt="logo-gitHub" className='svg-github-logo'/>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Nav;