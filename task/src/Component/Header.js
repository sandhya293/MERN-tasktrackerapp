import {useNavigate} from 'react-router-dom'
const Header = () => {

    let nav = useNavigate()

    const name = localStorage.getItem("username")

    const logout = () => {

        localStorage.removeItem("username")
        nav('/',{replace:true})
    }
    return (
        <div class="header">

            <ul>
                {/* <li>Home</li> */}
                <li><h3>Hello {name}</h3> </li>
                <li><button class="btn btn-danger" onClick={logout}>Logout</button></li>
            </ul>
        </div>
    )
}

export default Header
