import React from 'react'

//icons
import {RiCloseLine} from 'react-icons/ri'
import {RiMenuLine} from 'react-icons/ri'

const Header = () => {

// add and remove classes
const handleClickAdd = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('show-menu')
}

const handleClickRemove = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}


  return (
    <>

        {/* <!-- part 1 ========== HEADER ============================= --> */}
    <header className="header" id="header" >
        {/* <!-- ===========NAV BAR ================== --> */}
        <nav className="nav container">
            <a href="#" class="nav__logo">JBL</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#favorite" className="nav__link">
                            Favorites
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#model" className="nav__link">
                            Models
                        </a>
                    </li>
                </ul>

                {/* <!-- Close Button --> */}
            <div className="nav__close" id="nav-close" onClick={handleClickRemove} >
                <RiCloseLine />
                </div>
            </div>

            {/* <!-- Toggle button --> */}
            <div className='nav__toggle' id="nav-toggle" onClick={handleClickAdd}>
                <RiMenuLine className="ri-menu-line"/>
            </div>

        </nav>
    </header>


    </>
  )
}

export default Header