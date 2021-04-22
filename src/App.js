
import './sass/styles/main.scss';
import { useRoutes } from 'hookrouter'; 

//Componentes
import Registro from './components/Registro';
import Login from './components/Login';
import Home from './components/Home'; 


function App() {
    const routes = {
      '/': () => <Home/>,
      '/registro': () => <Registro/>,
      '/login': () => <Login/>
    }
    
    const component = useRoutes(routes)

  return (
    <div className="App">
      {component} 
    </div>
  );
}

export default App;
