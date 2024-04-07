import Jsx,{Greet} from "./containers/Jsx";
import Databinding from "./containers/Databinding";
import Users from "./containers/Users";
import {Routes,NavLink,Route} from 'react-router-dom';//routes is for making and array navlink is for navigation link route is for simple route


function App(){
    return (
        <div>
             {/* <Jsx />
            {
                Greet()
            } 
            <Databinding/>
            <Users/>  */}
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Jsx</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/binding">Databinding</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Jsx />}></Route>
                <Route path="/binding" element={<Databinding />}></Route>
                <Route path="/users" element={<Users />}></Route>
            </Routes>

        </div>
    )
}

export default App;