
import React ,{useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Component/Header'

import axios from 'axios'

const Home = () => {

    const[Data,setData] = useState([])

    const[Update,setUpdate] = useState([])

    const uname = localStorage.getItem("username")
    const [showUpdateBox,setShowUpdateBox] = React.useState(false);
    const [taskdata,setTaskData] = React.useState({

        user:localStorage.getItem("username"),
        title:"",
        desc:"",
        date:""

    
    })

    const getdata = () => {

        axios.post('/task/gettask/',{user:uname}).then((req)=> {

            const task_item = req.data.data

            if(task_item.length === 0)
            {
               document.getElementById('row').innerHTML ="Nothing to Display"
            }

            setData(task_item)
        })
    }

    

    const dlt = (t) => {
  
        axios.post('/task/deletetask',{title:t}).then((res)=> {

            window.location.reload();
            
        })
        
    }

    const update = (t) => {

        axios.post('/task/update',{_id:t}).then((res) => {

            console.log("clicked")
            const u_update = res.data.data[0]           
            setUpdate(u_update)
            setShowUpdateBox(true)
        })
      
    }

    const addtask = () => {

        // console.log(taskdata)
        axios.post('/task/addtask',taskdata).then((res)=> {

            window.location.reload();
        })
        

    }

    const updatetask =(u) => {
       
        axios.put('/task/updt/'+u ,taskdata).then((res)=> console.log(res.data))
    }

    let nav = useNavigate()

    useEffect(()=> {

        if(localStorage.getItem("username")===null)
        {
           nav('/',{replace:true})
        }
        getdata();

    },[])

    const changetype=() => {

        document.getElementById('mydate').type = "datetime-local";
    }

  

    // useEffect(()=> {})

   
    return (
        <div>
        <Header />
        {/* <h1>Hello {uname} </h1>  
        <button onClick={logout}>Logout</button> */}

        <div class="Tasktracker">

            <h1 class="jumbo-torn" >Task Tracker</h1>
            {/* <input class="form-control" value={Update.title} onChange={(e)=>taskdata.title = e.target.value} placeholder='Task Title'/>
            <input class="form-control" value={Update.desc} onChange={(e)=> taskdata.desc = e.target.value} placeholder='Task Desc'/>
            <input class="form-control" onChange={(e)=> taskdata.date = e.target.value} type="datetime-local"/> */}
            {!showUpdateBox?
            <>
            <input class="form-control"  onChange={(e)=>taskdata.title = e.target.value} placeholder='Task Title'/>
            <input class="form-control"  onChange={(e)=> taskdata.desc = e.target.value} placeholder='Task Desc'/>
            <input class="form-control" onChange={(e)=> taskdata.date = e.target.value} type="datetime-local"/>
            <button class="btn btn-success" onClick={addtask}>Set Task</button>
            </>
            :
            <>
            <input class="form-control"  onChange={(e)=> taskdata.title = e.target.value} placeholder={Update.title}/>
            <input class="form-control"  onChange={(e)=> taskdata.desc = e.target.value} placeholder={Update.desc}/>
            <input class="form-control" id='mydate' onClick={changetype} onChange={(e)=>  taskdata.date = e.target.value} placeholder={Update.date}/>
            <button class="btn btn-success" onClick={() =>updatetask(Update._id)}>update Task</button>
            </>
            }
           
            </div> 

            <div class="row col-md-9 mt-4 text-center jumbotron"><h1>Recent Tasks</h1></div>
            
            <div class="table">
              <table>
                  <thead>
                  <tr id='row'>
                      <th>Count</th>
                      <th>Task Title</th>
                      <th>Description</th>
                      <th>Delete</th>
                      <th>Update</th>
                  </tr>
                  </thead>
                  <tbody>
                  {Data.map((item,index)=> (
                    
                    <tr key={item._id}>
                     <td>{index+1}</td>     
                     <td>{item.title}</td>
                     <td>{item.desc}</td>
                     <td onClick={()=>dlt(item.title)}><i class="fa fa-minus-square"></i></td>
                     <td onClick={()=>update(item._id)}><i class="fa fa-edit"></i></td>
                     
                      </tr>
                     

                 ))}
                   </tbody>

              </table>
                 
              

            </div> 
        </div>
    )
}

export default Home
