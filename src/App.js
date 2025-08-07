import logo from './logo.svg';
import './App.css';
import Intro from './ui/Molecules/Intro';
import Module1 from './Modules/Module1';
import Module2 from './Modules/Module2';
import Module3 from './Modules/Module3';
import Paragraph2 from './ui/Molecules/Paragraph2';
import Signup from './ui/Molecules/Signup';
import { Footer } from './ui/Molecules/Footer';
import { BrowserRouter } from 'react-router-dom';
import Trello from './Pages/Trello';
function App() {
  return (
    
   //<Intro/>

 //<Module1/>
// <Module2/>
<BrowserRouter><Trello/></BrowserRouter>

//<Paragraph2/>
//<Signup/>
//<BrowserRouter><Footer/></BrowserRouter>

  );
}

export default App;
