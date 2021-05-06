import logo from './logo.svg';
import './App.css';
import HomePage from './page/home';
import Header from './component/Header';
import Footer from './component/Footer';
import Register from './page/register';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <HomePage/> */}
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
