
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

    let nav = useNavigate()

    const user = ({

        username:"",
        name:"",
        password:""
    })

    const reguser = () => {

        axios.post('/userpage/register',user).then((res => {

            document.getElementById('success').innerHTML = "Registered";

            setTimeout(()=>{
                
                nav('/',{replace:true})
            },2000)        
        }))     
    
    }
    return (
        <div className="login">

            <input class="form-control" onChange={(e)=> user.username = e.target.value} placeholder="Username" />
            <input class="form-control" onChange={(e)=> user.name = e.target.value} placeholder="Name" />       
            <input class="form-control" type="password" onChange={(e)=> user.password = e.target.value} placeholder="Password" />
            <button class="form-control btn btn-success" onClick={reguser}>Register</button>
            <p id="success"></p>
            
        </div>
    )
}

export default Signup
