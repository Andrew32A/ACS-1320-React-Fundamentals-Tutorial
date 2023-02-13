// import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'

import Title from './Title';
// import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      {/* <POPOSList /> */}
      <Footer />
    </div>
  );
}

export default App;
