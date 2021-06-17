
import './sass/styles/main.scss';
import { useRoutes } from 'hookrouter'; 

//Componentes
import Registro from './components/Registro';
import Login from './components/Login';
import Home from './components/Home'; 
import { MoviePage } from './components/MoviePage';


function App() {
   
    const routes = {
      '/': () => <Home/>,
      '/registro': () => <Registro/>,
      '/login': () => <Login/>,
      '/movie/:id': ({id}) => <MoviePage id={id} />
      
    }
    
    const component = useRoutes(routes)

  return (
    <div className="App">
      {component} 
    </div>
  );
}

export default App;
