import reactLogo from './assets/react.svg'
import './index.css'
import Header from './component/Header';
import Main from './component/Main';
import Basket from './component/Basket';



function App() { 
 
  return (
   
    <div>
       <Header/>
       <Main/>
       <Basket/>
    </div>
    
  );
}

export default App