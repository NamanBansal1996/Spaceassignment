import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import PeopleViews from './component/PeopleViews';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <main>
    <Navbar/>
    <LandingPage/>
    <PeopleViews/>
    <Footer/>
    </main>
    
    </>
  )
}

export default App;
