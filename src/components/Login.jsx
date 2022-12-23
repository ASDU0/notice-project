import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigateTo = useNavigate();
  const home = () => {
    navigateTo('/');
  }

  const toRegister = () => {
    navigateTo('/register');
  }

  return (
    <div className="container-login">
      <div className="content-login">
        <form className='login'>
          <i className="fa-solid fa-xmark close-login"
            onClick={home}></i>
          <div className="logo">
            <h1>ADSU</h1>
          </div>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password"/>
          <label>
            <input type="checkbox" /> Stay signed in.
          </label>
          <button>Log In</button>
          <p>¿Eres nuevo? <a href='#' onClick={toRegister}>Regístrate.</a></p>
        </form>
      </div>
    </div>
  );
}

export default Register;