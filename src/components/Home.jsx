import '../styles/home.css';

import Navbar from './Navbar';
import CardNotice from './CardNotice';

{/* <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
        <Outlet />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route exact path="register" element={<Register />}/>
        </Routes>
      </div> */}

function Home() {
  let basic_object = {
    title: 'Auxiliar de producción',
    employer_name: 'Michael Splitz',
    location: 'Cusco',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3AkFeondcY90cda3u5Ic1cL30VweCZ1KDVf0c1T23u2JFqesP8I3E0CCKFwbMrvkehc&usqp=CAU'
  };

  let objects = [basic_object, basic_object, basic_object, basic_object,
    basic_object, basic_object, basic_object, basic_object, basic_object];

  return (
    <div className='home'>
      <Navbar />
      <div className='notice-section'>
        {
          objects.map(e =>
            <CardNotice title={e.title} employer_name={e.employer_name}
              location={e.location} img={e.img} />
          )
        }
      </div>
    </div>
  );
}

export default Home;