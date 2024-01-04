import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar  title="Text-Editor" ></Navbar>
      <Form heading="Enter the text "></Form>
      <Footer ></Footer>
    </div>
  );
}

export default App;
