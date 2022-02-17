
import '../NavBar.css';
import logo from '../logo.svg';


const NavBar = ()=>{
    return(
        <header>
           <div className='nameStore'>
            <img className='logo' src={logo} alt="logo" />
            <label>papeleriaStore</label>
           </div>
           
           <nav>
               <ul className='navLinks'>
                <li><a href='#'>Inicio</a></li>
                <li><a href=''>Agendas</a></li>
                <li><a href=''>Lapices</a></li>
                <li><a href=''>Plumas</a></li>
               </ul>
           </nav>
           <a className='login' href=''><button>Iniciar Sesión</button></a>
        </header>
    );
}

export default NavBar;

