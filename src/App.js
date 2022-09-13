import logo from './logo.svg';
import './App.css';
import {Routes, Router, Route} from 'react-router-dom';

const App = () => {
  return (
      <Routes>
            <Route path='/' element={<Navigation/>}>
                {/*<Route index element={<Home/>}/>*/}
                {/*<Route path='shop' element={ <Shop />}/>*/}
                {/*<Route path='auth' element={ <Authentication />}/>*/}
            </Route>
      </Routes>
  )
}
export default App;
