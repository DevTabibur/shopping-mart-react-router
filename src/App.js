import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home.jsx';
import Blog from './components/Blog/Blog.jsx';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import NotFound from "./components/NotFound/NotFound";
import Shirt from "./components/Shirt/Shirt";
import { createContext } from "react";
import OrderReview from "./components/Order Review/OrderReview.jsx";
import useKids from "./Hooks/useKids";
import useBlogs from "./Hooks/useBlogs";
export const MyContext = createContext([]);



function App() {
  // const [kids, setKids] = useKids();
  const [blogs, setBlogs] = useBlogs();
  return (
    <>
    <MyContext.Provider value={[blogs, setBlogs]}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/shirt" element={<Shirt/>}></Route>
        <Route path="/women" element={<Women/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/order-review" element={<OrderReview/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </MyContext.Provider>

      
    </>
  );
}

export default App;
