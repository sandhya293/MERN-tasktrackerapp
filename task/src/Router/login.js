 import {useNavigate} from 'react-router-dom'
 import axios from 'axios'

const Login = () => {

    const user = ({

        username:"",
        password:""
    })

    let nav = useNavigate()

    const login = () => {
  
        axios.post('/userpage/login',user).then((res)=> {

            const len = res.data.data.length
            if(len === 1) {
                
                
                document.getElementById('success').innerHTML = "Success";
                setTimeout(()=>{
                    localStorage.setItem("username",res.data.data[0].username)
                    nav('/home',{replace:true})
                },2000)
                
            }
        })
    }


    const reg = () => {

          nav('/signup',{replace:true})
    }
    return (
        <div class="" className="login">
            
            <input class="form-control"  onChange={(e)=> user.username = e.target.value}  placeholder="Username" />
            <input class="form-control" onChange={(e)=> user.password = e.target.value} placeholder="Password" />
            
            <button class="form-control btn btn-success" onClick={login}>Login</button>
            <button class="form-control btn btn-info" onClick={reg} >SignUp</button>
            
            <h1 id='success'></h1>

        </div>
    )
}

export default Login
