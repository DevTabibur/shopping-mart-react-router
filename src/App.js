import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';


function App() {
  return (
    <>

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

      
    </>
  );
}

export default App;
