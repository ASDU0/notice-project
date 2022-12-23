import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const navigateTo = useNavigate();

  function toRegister() {
    navigateTo('/register');
  }

  return (
    <nav className='nav-bar'>
      <div className='logo-section'>
        <h4>ASDU</h4>
      </div>
      <div className='filter-section'>
        <a href="#">Ubicación</a>
        <a href="#">Fecha de publicación</a>
        <a href="#">Tipo</a>
        <a href="#">Empleador</a>
      </div>
      <button onClick={toRegister}>Publicar Empleos</button>
    </nav>
  )
}

export default Navbar;