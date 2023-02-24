import logo from './logo.svg';
import './App.css';
import Header from "./compnents/Header/Header";
import NavBar from "./compnents/NavBar/NavBar";
import Profile from "./compnents/Profile/Profile";

function App() {
  return (
    <>
        <Header />
        <div className="wrapper">
            <main>
                <NavBar />
                <Profile />
            </main>
        </div>
    </>
  );
}

export default App;
