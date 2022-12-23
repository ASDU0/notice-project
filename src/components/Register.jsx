import { useNavigate } from "react-router-dom";
import '../styles/register.css';

function Login() {
  const navigateTo = useNavigate();
  const home = () => {
    navigateTo('/');
  };

  const toLogin = () => {
    navigateTo('/login');
  };

  return (
    <div className="container-register">
      <div className="yellow"></div>
      <div className="black"></div>
      <div className="subcontainer">
        <div className='content-register'>
            <div className='link-login'>
            <button onClick={toLogin}>Log In</button>
              <p>Already have an account?</p>
            </div>
            <div className='container-form'>
              <i className="fa-solid fa-xmark"
                onClick={home}></i>
              <form className='register'>
                <h1>SIGN UP</h1>
                <div>
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder='Jay Martin'/>
                </div>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder='Enter Mail'/>
                </div>
                <div>
                  <i className="fa-solid fa-phone"></i>
                  <input type="tel" placeholder='Enter Number'/>
                </div>
                <div>
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder='Enter Password'/>
                </div>
                <div>
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder='Confirm Password'/>
                </div>
                <button>Sign Up</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
