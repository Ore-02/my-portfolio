
import Home from './home/home';

import { Routes, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contacts/contacts';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigation/>}>
          <Route index element  = {<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
