import React , {useState} from 'react'

import { useDispatch , useSelector } from 'react-redux'
import { sendData } from '../Action'
export default function User() {
  const [user , setuser] = useState(0)
  const dispatch = useDispatch()
  
  const data = useSelector((state)=>state.data)
  console.log(data)
  return (
    <>

      <div className='adminLoginForm' style={{ width:'50%',  height:'400px', marginLeft:'400px' ,  marginTop:'100px'}}>
   
      <form>
  <div className="mb-3" style={{ marginTop:'50px'  }}>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="number" onChange={(e)=>setuser(e.target.value)} style={{width:'70%', textAlign:'center',marginLeft:'100px' } } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"  style={{width:'70%', textAlign:'center',marginLeft:'100px'}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox"  style={{width:'3%', textAlign:'center',marginLeft:'80px', marginRight:'-1000px '}} className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>sendData(dispatch(user),setuser(''))}>Submit</button>
</form> 
   
     </div>  
    
     <h1>{data}</h1>
    </>
  )
}
