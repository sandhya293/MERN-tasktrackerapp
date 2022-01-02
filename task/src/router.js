import Login from './Router/login'
import Signup from './Router/Signup'
import Home from './Router/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const Router = () => {
    return (
       <BrowserRouter>
       <Routes>
           <Route path="/" element={ <Login />} />
           <Route path="/signup" element={ <Signup />} />
           <Route path="/home" element={ <Home />} />
       </Routes>
       </BrowserRouter>
    )
}

export default Router
