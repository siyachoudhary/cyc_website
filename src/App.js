import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Footer } from './components/Footer';

import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from "./screens/HomePage"
import {About} from "./screens/About"
import {Apps} from "./screens/Apps"
import {Team} from "./screens/Team"
import {Projects} from "./screens/Projects"
import {Donate} from "./screens/Donate"
import { Privacy } from './screens/Privacy';


function App() {
  return (
    <div className="App">
      <MyNav/>
      <BrowserRouter>
            <Routes>
                <Route path='/cyc_website/' element={<HomePage/>}></Route>
                <Route path='/cyc_website/about' element={<About/>}></Route>
                <Route path='/cyc_website/apps' element={<Apps/>}></Route>
                <Route path='/cyc_website/team' element={<Team/>}></Route>
                <Route path='/cyc_website/projects' element={<Projects/>}></Route>
                <Route path='/cyc_website/donate' element={<Donate/>}></Route>

                <Route path='/cyc_website/privacy' element={<Privacy/>}></Route>
            </Routes>
          </BrowserRouter>
          <Footer/>
    </div>
  );
}

export default App;
