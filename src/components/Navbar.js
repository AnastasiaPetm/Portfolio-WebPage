import React , {useState} from 'react' ;
import {Link} from 'react-router-dom';
import './Navbar.css'
function Navbar() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
             Ioannis Peppas C.V. <i class="fa-solid fa-address-book"></i>
            </Link> 
            
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <a href='./Ioannis-Patapios_Peppas_IT_CV.docx.pdf'  target="_blank" className='nav-links'  onClick={closeMobileMenu} >
                        Download C.V. 
                    </a>
                </li>
                <li className='nav-item' onClick={handleClick}>
                    <Link to='/' className='nav-links'  onClick={closeMobileMenu} >
                        Home
                    </Link>
                </li>
            </ul>
           
        </div>
    </nav>
    </>
  )
}

export default Navbar
