import logo from './logo.svg';
import './App.css';
import AllRoute from './AllRoute';
import SmallCentered from './Components/Footer';
import Navbar from './Pages/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>

      <Navbar/>
      <AllRoute/>
      
      <SmallCentered/>
    </>
  );
}

export default App;
